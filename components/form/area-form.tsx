"use client"
import { useForm } from "@tanstack/react-form"
import { Input } from "../ui/input"
import { Field, FieldError, FieldGroup, FieldLabel, FieldSeparator } from "../ui/field"
import { Button } from "../ui/button"
import { useState } from "react"
import { Eye, EyeClosed } from "lucide-react"

import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { Spinner } from "../ui/spinner"

import { userRegistrationSchema } from "@/validation"
import Link from "next/link"
import { Card } from "../ui/card"
import { useCreateArea } from "@/hook/area.hook"
import { areaSchema } from "@/validation/area.validation"


const AreaForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { mutate: createArea, isPending, isError } = useCreateArea()
    const router = useRouter()
    const form = useForm({
        defaultValues: {
            name: "",
            district: "",
            division: "",
            description: "",    
        },
        validators: {
            onSubmit: areaSchema,
        },
        onSubmit: ({ value }) => {
            const areaData = {
                name: value.name,
                district: value.district,
                division: value.division,
                description: value.description,

            }
            createArea(areaData, {
                onSuccess: (res) => {
                    toast.success(res.message, { position: "top-right" })
                   
                    router.push(`/area`);
                },
                onError: (err) => {
                    toast.error("Invalid email or password", { position: "top-right" })
                    router.push('/login')
                }
            });

        }
    });

    return (
        <Card className="w-lg p-4">
        <div>
            <div className="h-24">
                <h1 className="text-center text-2xl font-semibold">Create Area</h1>
                <p className="text-center text-sm text-slate-400">Please enter your details</p>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                }}
                className="mb-4"
            >
                <FieldGroup>
                    <form.Field name="name" >
                        {(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid;
                            return (
                                <Field>
                                    <FieldLabel className="text-sm text-slate-400" htmlFor={field.name}>{field.name}</FieldLabel>
                                    <Input
                                        id={field.name}
                                        type={field.name}
                                        name={field.name}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        value={field.state.value}
                                        autoComplete="off"
                                        placeholder={field.name}
                                    />
                                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                </Field>
                            )
                        }}
                    </form.Field>
                    <form.Field name="district" >
                        {(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid;
                            return (
                                <Field>
                                    <FieldLabel className="text-sm text-slate-400" htmlFor={field.name}>{field.name}</FieldLabel>
                                    <Input
                                        id={field.name}
                                        type={field.name}
                                        name={field.name}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        value={field.state.value}
                                        autoComplete="off"
                                        placeholder={field.name}
                                    />
                                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                </Field>
                            )
                        }}
                    </form.Field>
                    <form.Field name="division" >
                        {(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid;
                            return (
                                <Field>
                                    <FieldLabel className="text-sm text-slate-400" htmlFor={field.name}>{field.name}</FieldLabel>
                                    <div className="flex items-center relative">
                                        <Input
                                            id={field.name}
                                            type="text"
                                            name={field.name}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            value={field.state.value}
                                            autoComplete="off"
                                            placeholder={field.name}
                                        />
                                        
                                    </div>
                                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                </Field>
                            )
                        }}
                    </form.Field>
                    <form.Field name="description" >
                        {(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid;
                            return (
                                <Field>
                                    <FieldLabel className="text-sm text-slate-400" htmlFor={field.name}>{field.name}</FieldLabel>
                                    <div className="flex items-center relative">
                                        <Input
                                            id={field.name}
                                            type="text"
                                            name={field.name}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            value={field.state.value}
                                            autoComplete="off"
                                            placeholder={field.name}
                                        />
                                        
                                    </div>
                                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                </Field>
                            )
                        }}
                    </form.Field>
                    <Button disabled={isPending} type="submit">{isPending ? <Spinner /> : "Create Area"}</Button>
                </FieldGroup>

            </form>
            
      </div>


        
        </Card>
    )
}

export default AreaForm