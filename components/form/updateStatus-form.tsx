"use client"

import { useForm } from "@tanstack/react-form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Field, FieldError, FieldGroup, FieldLabel, FieldSeparator } from "../ui/field"
import { MapPin } from "lucide-react";
import { useCreateAssignment, useTechnician, useUpdateAssignment } from "@/hook/assignment.hook";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { useUpdateStatus } from "@/hook";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

type AssignmentFormPayload = {
    id: string,
    status: string
}

type AssignmentStatusPayload = {
    status: string
}

export const AssignUpdateStatus = ({payload}:{payload:AssignmentFormPayload}) => {
    console.log(payload)
    const queryClient = useQueryClient()
    const Starus =[
        {
            value:"PENDING",
            label:"PENDING"
        },
        {
            value:"ACCEPTED",
            label:"ACCEPTED"
        },
        {
            value:"IN_PROGRESS",
            label:"IN_PROGRESS"
        },
        {
            value:"COMPLETED",
            label:"COMPLETED"
        },
        {
            value:"REJECTED",
            label:"REJECTED"
        },
        {
            value:"CANCELLED",
            label:"CANCELLED"
        }
    ]
  
    const {data} = useTechnician()
    const { id, status} = payload 
    const {mutate:statuse,isPending} = useUpdateAssignment(id)
    const form = useForm({
        defaultValues: {
       
            status: status
        },
        onSubmit: ({ value }) => {
            

            statuse(value.status, {
                onSuccess: async(res) => {
                    toast.success(res.message, { position: "top-right" });
                    await queryClient.invalidateQueries({ queryKey: ["assignment"] });
                },
                onError: (err) => {
                    console.log(err)
                }
            })

        }
        


        
    })

    return <div>
        <form 
        onSubmit={(e)=>{
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
            }}
        >
            
           <form.Field name="status">
                            {(field) => (
                                <Field className="space-y-1.5">
                                    <FieldLabel className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
                                        <MapPin className="size-3.5 text-emerald-600" /> Area Name
                                    </FieldLabel>
                                    <Select
                                        value={field.state.value}
                                        onValueChange={(val) => field.handleChange(val)}
                                    >
                                        <SelectTrigger className="w-full rounded-2xl border-emerald-100 bg-emerald-50/40 backdrop-blur-md shadow-sm transition-all focus:ring-2 focus:ring-emerald-400">
                                            <SelectValue placeholder={"Select an Area"} />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl border-emerald-100 bg-white/95 backdrop-blur-xl shadow-xl">
                                            <SelectGroup>
                                                {Starus.map((item: any) => (
                                                    <SelectItem
                                                        key={item.label}
                                                        value={item.value}
                                                        className="rounded-xl my-1 focus:bg-emerald-50 focus:text-emerald-900 font-medium cursor-pointer"
                                                    >
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>
                            )}
                        </form.Field>
            
<Button
                            disabled={isPending}
                            type="submit"
                            className="w-full mt-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.01]"
                        >
                            {isPending ? <Spinner /> : "Update Schedule ✨"}
                        </Button>
        </form>
    </div>
}