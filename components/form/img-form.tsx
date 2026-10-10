"use client"
import { useForm } from "@tanstack/react-form"
import { Input } from "../ui/input"
import { Field, FieldError, FieldGroup, FieldLabel, FieldSeparator } from "../ui/field"
import { Button } from "../ui/button"
import { useState } from "react"
import { Eye, EyeClosed } from "lucide-react"
import { useImgUpload, useLogin } from "@/hook"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { Spinner } from "../ui/spinner"
import { GoogleLoginComponent } from "../modules/GoogleLogin/GoogleLoginComponent"
import { loginSchema } from "@/validation"
import Link from "next/link"
import { ro } from "zod/locales"


const imgForm = () => {
const {mutate:imgUpload,isPending,isError} = useImgUpload();
    const router = useRouter()
    const form = useForm({
        defaultValues: {
            img: null as File | null,

        },

        onSubmit: async ({ value }) => {

            console.log(value.img?.name)
            if(value.img){
                const formData = new FormData()
                formData.append("img", value.img)
                imgUpload(formData,{
                    onSuccess: (res) => {
                        toast.success(res.message, { position: "top-right" })
                        router.push('/profile')
                    },
                    onError: (err) => {
                        toast.error("Image upload failed", { position: "top-right" })
                        router.push('/profile')
                    }
                })
                
            }


        }
    });

    return (
        <div>


            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                }}
                className="mb-4"
            >
                <div className="p-4">
                    <label
                        htmlFor="image-upload"
                        className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/25 bg-muted/30 px-6 py-8 text-center transition-all hover:border-primary/50 hover:bg-muted/50"
                    >
                        {/* Upload Icon */}
                        <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-105">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 3v12" />
                                <path d="m17 8-5-5-5 5" />
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            </svg>
                        </div>

                        <p className="text-sm font-medium">
                            Click to upload an image
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                            PNG, JPG or WEBP • Max 5MB
                        </p>
                        <FieldGroup>
                            <form.Field name="img" >
                                {(field) => {

                                    return (
                                        <Field >

                                            <input
                                                className="mt-5"
                                                id={field.name}
                                                type="file"
                                                name={field.name}
                                                onChange={(e) => {
                                                    let file = e.target.files?.[0] ?? null
                                                    field.handleChange(file);
                                                    e.currentTarget.value = "";
                                                    return;

                                                }}



                                            />
                                            {field.state.value ? (
                                                <img
                                                    className="h-16 w-10 rounded-md object-cover"
                                                    src={URL.createObjectURL(field.state.value)}
                                                    alt="Preview"
                                                />
                                            ) : null}

                                        </Field>
                                    )
                                }}
                            </form.Field>
                            <Button type="submit" className="mt-4 w-full">Upload</Button>
                        </FieldGroup>
                    </label>

                   



                </div>
            </form>

        </div>


    )
}

export default imgForm