"use client"
import { useForm } from "@tanstack/react-form"
import { Input } from "../ui/input"
import { Field, FieldError, FieldGroup, FieldLabel, FieldSeparator } from "../ui/field"
import { Button } from "../ui/button"
import { useState } from "react"
import { Eye, EyeClosed } from "lucide-react"
import { useLogin } from "@/hook"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { Spinner } from "../ui/spinner"
import { GoogleLoginComponent } from "../modules/GoogleLogin/GoogleLoginComponent"
import { loginSchema } from "@/validation"
import Link from "next/link"


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {mutate:login, isPending} = useLogin()
    const router = useRouter()
    const form = useForm({
        defaultValues: {
            // email: 'admin@powersafe1.com',
            // password: 'Admin@12345'
            email: '',
            password: ''
        },
         validators: {
      onSubmit: loginSchema,
    },
        onSubmit: ({ value }) => {
            const loginData = {
                email: value.email,
                password: value.password
            }
            login(loginData,{
                onSuccess: (res) => {
                     toast.success(res.message, { position: "top-right" })
                    router.push('/')
                },
                  onError: (err) => {
                toast.error("Invalid email or password", { position: "top-right" })
                router.push('/login')
            }
            });
          
        }
    });

    return (
        <div>
            <div className="h-24">
                <h1 className="text-center text-2xl font-semibold">Login To Your Account </h1>
                <p className="text-center text-sm text-slate-400">Enter your email and password to login</p>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                }}
                className="mb-4"
            >
                <FieldGroup>
                    <form.Field name="email" >
                        {(field) => {
                            const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel className="text-sm text-slate-400" htmlFor={field.name}>email</FieldLabel>
                                    <Input
                                        id={field.name}
                                        type={field.name}
                                        name={field.name}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        value={field.state.value}
                                        autoComplete="off"
                                        placeholder="email"
                                    />
{isInvalid && <FieldError errors={field.state.meta.errors} />}
                                </Field>
                            )
                        }}
                    </form.Field>
                    <form.Field name="password" >
                        {(field) => {
                            const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
                            return (
                                <Field>
                                    <FieldLabel className="text-sm text-slate-400" htmlFor={field.name}>password</FieldLabel>
                                    <div className="flex items-center relative">
                                        <Input
                                            id={field.name}
                                            type={showPassword ? "text" : "password"}
                                            name={field.name}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            value={field.state.value}
                                            autoComplete="off"
                                            placeholder="password"
                                        />
                                        <button className="text-sm absolute right-2 top-2" type="button" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <EyeClosed className=" size-4" /> : <Eye className=" size-4" />}
                                        </button>
                                    </div>
                                     {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                </Field>
                            )
                        }}
                    </form.Field>
                    <Button disabled={isPending} type="submit">{isPending ? <Spinner /> : "Login"}</Button>
                </FieldGroup>

            </form>
            <FieldSeparator className="my-4">Or</FieldSeparator>
            <GoogleLoginComponent />
          <div className="text-center text-sm text-muted-foreground mt-5">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium underline underline-offset-4 hover:text-primary"
        >
          Register
        </Link>
      </div>
           
        </div>
    )
}

export default LoginForm