"use client";

import { useForm } from "@tanstack/react-form";
import { Input } from "../ui/input";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import { useUpdateSchedule } from "@/hook/schedule.hook";
import { Card } from "../ui/card";
import { useGetArea } from "@/hook/area.hook";
import { CalendarDays, Clock, MapPin, Sparkles, FileText } from "lucide-react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useQueryClient } from "@tanstack/react-query";
import { ApiResponse, ComplaintPayload, MaintenancePayload, Schedule } from "@/type";
import { useCreateComplaint, useUpdateComplaint } from "@/hook/complaint.hook";
import { Textarea } from "../ui/textarea";
import { useGetMe } from "@/hook";

import { useEffect } from "react";


const CreateComplaintForm = () => {
   

   const prioritydata = [
  { label: "Low", value: "LOW" },
  { label: "Medium", value: "MEDIUM" },
  { label: "High", value: "HIGH" },
  { label: "Urgent", value: "URGENT" },
];
const { data: currentUser } = useGetMe();
const { role } = currentUser?.data ?? {};


    const queryClient = useQueryClient();
    const { mutate: UComplain, isPending } = useCreateComplaint();
    const { data } = useGetArea();
    const router = useRouter();
   


    const form = useForm({
        defaultValues: {
            areaId:  "",
            title:  "",
           description: "",
            priority: "",
            address: "",
        },
        onSubmit: async ({ value }) => {
            
            if(role !== "USER"){
                toast.error("You are not allowed to create complain", { position: "top-right" });
                return;
            }
            if (!value.areaId) {
                toast.error("Please select an area!", { position: "top-right" });
                return;
            }
            const complainData = {
                areaId: value.areaId,
                title: value.title,
                description: value.description,
                priority: value.priority,
                address: value.address,
            };
            


            UComplain(complainData, {
                
                onSuccess: async (res: any) => {
                    toast.success(res?.message || "Schedule updated successfully! ✨", {
                        position: "top-right",
                    });
                    await queryClient.invalidateQueries({ queryKey: ["complaint"] });
                    router.push("/complain");
                },
                onError: (err: any) => {
                    toast.error(err?.message || "Failed to update schedule", {
                        position: "top-right",
                    });
                },
            });
        },
    });
    

    return (
        <div className="   ">
            {/* Cute Glassmorphism Card */}
            <Card className="w-full max-w-2xl overflow-hidden rounded-3xl border border-emerald-100/80 bg-white/80 p-2 backdrop-blur-xl shadow-xl shadow-emerald-950/5">
                <div className="text-center mb-6">
                    <div className="inline-flex rounded-2xl bg-emerald-100/70 p-3 text-emerald-600 shadow-inner mb-2">
                        <Sparkles className="size-6" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">Update Schedule</h1>
                    <p className="text-xs font-medium text-emerald-600/80 mt-1">
                        Update maintenance details for the target area 🌱
                    </p>
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        form.handleSubmit();
                        
                    }}
                    className="space-y-4"
                >
                    <FieldGroup className="space-y-4">
                        {/* Area ID Field */}
                        <form.Field name="areaId">
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
                                                {data?.data?.map((item: any) => (
                                                    <SelectItem
                                                        key={item.id}
                                                        value={item.id}
                                                        className="rounded-xl my-1 focus:bg-emerald-50 focus:text-emerald-900 font-medium cursor-pointer"
                                                    >
                                                        {item.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>
                            )}
                        </form.Field>

                        {/* Date Field */}
                        <form.Field name="title">
                            {(field) => (
                                <Field className="space-y-1.5">
                                    <FieldLabel className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
                                        <CalendarDays className="size-3.5 text-emerald-600" /> Title
                                    </FieldLabel>
                                    <Input
                                        type="text"
                                        className="rounded-2xl border-emerald-100 bg-emerald-50/40 backdrop-blur-md shadow-sm focus:ring-2 focus:ring-emerald-400"
                                        
                                        value={field.state.value }
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                </Field>
                            )}
                        </form.Field>

                        {/* Time Grid */}
                        <div className="grid grid-cols-1 gap-3">
                            {/* Start Time Field */}
                            <form.Field name="description">
                                {(field) => (
                                    <Field className="space-y-1.5">
                                        <FieldLabel className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
                                            <Clock className="size-3.5 text-emerald-600" /> Description
                                        </FieldLabel>
                                        {/* <Input
                                            type="text"
                                            className="rounded-2xl border-emerald-100 bg-emerald-50/40 backdrop-blur-md shadow-sm focus:ring-2 focus:ring-emerald-400"
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                        /> */}
                                        <Textarea 
                                        className="rounded-2xl border-emerald-100 bg-emerald-50/40 backdrop-blur-md shadow-sm focus:ring-2 focus:ring-emerald-400"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        />
                                    </Field>
                                )}
                            </form.Field>

                            {/* End Time Field */}
                             <form.Field name="priority">
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
                                                {prioritydata?.map((item: any) => (
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
                            
                        </div>

                        {/* Reason Field */}
                        <form.Field name="address">
                            {(field) => (
                                <Field className="space-y-1.5">
                                    <FieldLabel className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
                                        <FileText className="size-3.5 text-emerald-600" /> Address
                                    </FieldLabel>
                                    <Input
                                        className="rounded-2xl border-emerald-100 bg-emerald-50/40 backdrop-blur-md shadow-sm focus:ring-2 focus:ring-emerald-400"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        placeholder="e.g. Line repair, Grid maintenance..."
                                    />
                                </Field>
                            )}
                        </form.Field>

                        {/* Submit Button */}
                        <Button
                            disabled={isPending}
                            type="submit"
                            className="w-full mt-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.01]"
                        >
                            {isPending ? <Spinner /> : "Update Schedule ✨"}
                        </Button>
                    </FieldGroup>
                </form>
            </Card>
        </div>
    );
};

export default CreateComplaintForm;