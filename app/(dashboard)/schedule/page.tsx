"use client"
import LoginForm from "@/components/form/login-form"
import ScheduleForm from "@/components/form/schedule-form"
import { ScheduleTable } from "@/components/table/Schedule"
import { useGetSchedule } from "@/hook/schedule.hook";




export default function SchedulePage() {
  const { data, isPending, isError } = useGetSchedule();

  if (isPending) {
    return <div className="p-6 text-center">Loading schedules...</div>;
  }

  if (isError) {
    return (
      <div className="p-6 text-center text-red-500">
        Failed to load schedules.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="mb-6 text-2xl font-bold">
        Maintenance Schedules
      </h1>

      <ScheduleTable schedules={data?.data ?? []} />
    </div>
  );
}
