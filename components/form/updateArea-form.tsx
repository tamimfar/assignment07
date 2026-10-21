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
import { useCreateArea, useUpdateAreaById } from "@/hook/area.hook"
import { areaSchema } from "@/validation/area.validation"
import { Area } from "@/type"
import { useQueryClient } from "@tanstack/react-query";

const UpdateAreaForm = (props: any) => {
    const { id, name, district, division, description } = props.value
    console.log(props.value)
    const [showPassword, setShowPassword] = useState(false)
    const queryClient = useQueryClient()
    
    const { mutate: updateArea, isPending, isError } = useUpdateAreaById(id)
    const router = useRouter()
    const form = useForm({
        defaultValues: {
            name: name ?? "",
            district: district ?? "",
            division: division ?? "",
            description: description ?? "",
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
            updateArea(areaData, {
                onSuccess: async (res) => {
                    toast.success(res.message, { position: "top-right" });
                    await queryClient.invalidateQueries({ queryKey: ["area"] });
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




    )
}

export default UpdateAreaForm