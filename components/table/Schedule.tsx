"use client";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "../ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import UpdateScheduleForm from "../form/updateSchedule-form";
import { Schedule } from "@/type";
import { useDeleteSchedule } from "@/hook/schedule.hook";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";


export function ScheduleTable({ schedules }: { schedules: Schedule[] }) {

  if (!schedules?.length) {
    return (
      <Card className="flex flex-col items-center p-10 text-center border-2 border-dashed border-emerald-200 bg-emerald-50/50 backdrop-blur-md rounded-3xl shadow-sm">
        <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-600 mb-3 animate-bounce">
          <CalendarDays className="size-8" />
        </div>
        <h3 className="font-bold text-gray-800 text-base">No schedules found</h3>
        <p className="text-xs text-muted-foreground mt-1">No maintenance schedules available right now! ✨</p>
      </Card>
    );
  }
  const queryClient = useQueryClient();
  const {mutate: deleteSchedule} = useDeleteSchedule();
const handleDelete = (id: string) => {
  toast("Are you sure you want to delete this schedule?", {
    position: "top-right",
    action: (
      <Button
        onClick={() =>
          deleteSchedule(id, {
            onSuccess: () => {

                  toast.success("Schedule deleted successfully", {
                    position: "top-right",
                  });
                  queryClient.invalidateQueries({ queryKey: ["schedule"] });
                  
            },
              
            onError: () =>{

              toast.error("Failed to delete schedule", {
                position: "top-right",
              })
            }
              
          })
        }
        variant="destructive"
        className="btn btn-primary"
      >
        Delete
      </Button>
    ),
  });

  
}
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {schedules.map((schedule) => {
        const area = schedule.area;

        return (
          <Card
            key={schedule.id}
            className="group relative overflow-hidden rounded-3xl border border-emerald-100/80 bg-white/70 backdrop-blur-xl shadow-lg shadow-emerald-950/5 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:border-emerald-200"
          >
            {/* Cute Top Gradient Glow */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400" />

            <CardHeader className="flex flex-row items-center justify-between p-5 pb-3">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="rounded-2xl bg-emerald-100/70 p-3 text-emerald-600 shadow-inner">
                  <Sparkles className="size-5" />
                </div>
                <div className="min-w-0">
                  <h2 className="truncate text-base font-bold text-gray-800">
                    {schedule.reason}
                  </h2>
                  <p className="text-xs font-semibold text-emerald-600">
                    🌱 {area?.name ?? "Unknown area"}
                  </p>
                </div>
              </div>

              <Badge
                className={
                  schedule.status === "COMPLETED"
                    ? "rounded-full bg-emerald-500 text-white px-3 py-1 shadow-sm"
                    : "rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 hover:bg-emerald-100 shadow-sm"
                }
              >
                {schedule.status}
              </Badge>
            </CardHeader>

            <CardContent className="space-y-3.5 p-5 pt-0 text-xs">
              {/* Cute Date & Time Pill Box */}
              <div className="grid grid-cols-3 gap-2 rounded-2xl bg-emerald-50/60 p-3 text-center font-medium border border-emerald-100/50">
                <div>
                  <span className="block text-[10px] text-emerald-700/60 font-bold">DATE</span>
                  <span className="text-gray-700 font-semibold">{new Date(schedule.date).toLocaleDateString()}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-emerald-700/60 font-bold">START</span>
                  <span className="text-gray-700 font-semibold">{schedule.startTime}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-emerald-700/60 font-bold">END</span>
                  <span className="text-gray-700 font-semibold">{schedule.endTime}</span>
                </div>
              </div>

              {/* Area Info Box */}
              <div className="flex items-center justify-between rounded-2xl border border-emerald-100/40 bg-white/50 p-3 shadow-sm">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="rounded-xl bg-emerald-50 p-2 text-emerald-600">
                    <MapPin className="size-4 shrink-0" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-bold text-gray-800">{area?.name}</p>
                    <p className="truncate text-[10px] text-gray-400">
                      {area?.district} • {area?.division}
                    </p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={
                    area?.isActive
                      ? "rounded-full border-emerald-200 bg-emerald-50 text-emerald-700 text-[10px] font-semibold"
                      : "rounded-full border-rose-200 bg-rose-50 text-rose-600 text-[10px] font-semibold"
                  }
                >
                  {area?.isActive ? "Active" : "Inactive"}
                </Badge>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-2 text-gray-500 pt-1 px-1">
                <p className="truncate"><span className="font-semibold text-gray-400">ID:</span> {schedule.id}</p>
                <p className="truncate"><span className="font-semibold text-gray-400">Reason:</span> {schedule.reason}</p>
                <p className="truncate"><span className="font-semibold text-gray-400">Created:</span> {new Date(schedule.createdAt).toLocaleDateString()}</p>
                <p className="truncate"><span className="font-semibold text-gray-400">Updated:</span> {new Date(schedule.updatedAt).toLocaleDateString()}</p>
              </div>
            </CardContent>
            <CardFooter>
              
              <Dialog>
                <DialogTrigger asChild>

                  <Button>Edit</Button>
                </DialogTrigger>
                <DialogContent>
                  <UpdateScheduleForm
                    schedule={{ ...schedule, areaId: area?.id , name: area?.name }}
                  />
                </DialogContent>
              </Dialog>
                  <Button onClick={() => handleDelete(schedule.id)} className="mx-3" variant="destructive">Delete</Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}