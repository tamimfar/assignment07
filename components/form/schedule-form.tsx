"use client"
import { useForm } from "@tanstack/react-form"
import { Input } from "../ui/input"
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Spinner } from "../ui/spinner"
import { useSchedule } from "@/hook/schedule.hook"

const ScheduleForm = () => {
    const { mutate: createSchedule, isPending } = useSchedule()
    const router = useRouter()

    const form = useForm({
        defaultValues: {
            areaId: '',
            date: '',
            startTime: '',
            endTime: '',
            reason: '',
        },
        onSubmit: ({ value }) => {
            const scheduleData = {
                areaId: value.areaId,
                date: value.date,
                startTime: value.startTime,
                endTime: value.endTime,
                reason: value.reason,
            }

            createSchedule(scheduleData, {
                onSuccess: (res: any) => {
                    toast.success(res?.message || "Schedule created successfully!", { position: "top-right" })
                    router.push('/schedules') // Apnar target route e pathaben
                },
                onError: (err: any) => {
                    toast.error(err?.message || "Failed to create schedule", { position: "top-right" })
                }
            });
        }
    });

    return (
        <div className="max-w-md mx-auto p-6">
            <div className="h-20 mb-4">
                <h1 className="text-center text-2xl font-semibold">Create Schedule</h1>
                <p className="text-center text-sm text-slate-400">Enter maintenance details for the area</p>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                }}
                className="mb-4"
            >
                <FieldGroup>
                    {/* Area ID Field */}
                    <form.Field name="areaId">
                        {(field) => (
                            <Field>
                                <FieldLabel className="text-sm text-slate-400">Area ID</FieldLabel>
                                <Input
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    placeholder="Enter Area ID"
                                />
                            </Field>
                        )}
                    </form.Field>

                    {/* Date Field */}
                    <form.Field name="date">
                        {(field) => (
                            <Field>
                                <FieldLabel className="text-sm text-slate-400">Date</FieldLabel>
                                <Input
                                    type="date"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </Field>
                        )}
                    </form.Field>

                    {/* Start Time Field */}
                    <form.Field name="startTime">
                        {(field) => (
                            <Field>
                                <FieldLabel className="text-sm text-slate-400">Start Time</FieldLabel>
                                <Input
                                    type="time"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </Field>
                        )}
                    </form.Field>

                    {/* End Time Field */}
                    <form.Field name="endTime">
                        {(field) => (
                            <Field>
                                <FieldLabel className="text-sm text-slate-400">End Time</FieldLabel>
                                <Input
                                    type="time"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </Field>
                        )}
                    </form.Field>

                    {/* Reason Field */}
                    <form.Field name="reason">
                        {(field) => (
                            <Field>
                                <FieldLabel className="text-sm text-slate-400">Reason</FieldLabel>
                                <Input
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    placeholder="Maintenance reason..."
                                />
                            </Field>
                        )}
                    </form.Field>

                    <Button disabled={isPending} type="submit" className="w-full mt-4">
                        {isPending ? <Spinner /> : "Create Schedule"}
                    </Button>
                </FieldGroup>
            </form>
        </div>
    )
}

export default ScheduleForm;