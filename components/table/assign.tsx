
"use client";

import { useAssignment, useDeleteAssignment } from "@/hook/assignment.hook";
import { Button } from "../ui/button";
import { useUserStore } from "@/stores/userStore";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { AssignUpdateStatus } from "../form/updateStatus-form";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
const statusColors: Record<string, string> = {
    PENDING: "bg-yellow-100 text-yellow-700",
    ACCEPTED: "bg-blue-100 text-blue-700",
    COMPLETED: "bg-green-100 text-green-700",
};

const priorityColors: Record<string, string> = {
    LOW: "bg-gray-100 text-gray-700",
    MEDIUM: "bg-yellow-100 text-yellow-700",
    HIGH: "bg-orange-100 text-orange-700",
    URGENT: "bg-red-100 text-red-700",
};

export default function Assignment() {
    const user = useUserStore((state) => state.user);
    const role = user?.role;
     const { mutate: deleteAssignment, isPending } =
    useDeleteAssignment();
    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useAssignment();
    console.log(data);

    // API response: { success, message, data: [...] }
    const assignments = data?.data ?? [];

    if (isLoading) {
        return <p className="p-6">Loading assignments...</p>;
    }

    if (isError) {
        return (
            <p className="p-6 text-red-500">
                Failed to load assignments.
            </p>
        );
    }

    if (assignments.length === 0) {
        return <p className="p-6">No assignments found.</p>;
    }
   
   const handleDelete = (id: string) => {
  deleteAssignment(id, {
    onSuccess: (res) => {
      toast.success(
        res?.message || "Assignment deleted successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["assignment"],
      });
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to delete assignment.");
    },
  });
};

    return (
        <section className="space-y-6 p-6">
            <div>
                <h1 className="text-2xl font-bold">
                    Assignments
                </h1>
                <p className="text-sm text-gray-500">
                    Manage technician assignments and complaints.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {assignments.map((assignment: any) => {
                    const complaint = assignment.complaint;

                    return (
                        <div
                            key={assignment.id}
                            className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Complaint
                                    </p>
                                    <h2 className="mt-1 font-semibold text-gray-900">
                                        {complaint?.title}
                                    </h2>
                                </div>

                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColors[assignment.status] ??
                                        "bg-gray-100 text-gray-700"
                                        }`}
                                >
                                    {assignment.status}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="mt-3 line-clamp-2 text-sm text-gray-600">
                                {complaint?.description}
                            </p>

                            {/* Priority & Complaint Status */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span
                                    className={`rounded-md px-2 py-1 text-xs font-medium ${priorityColors[complaint?.priority] ??
                                        "bg-gray-100 text-gray-700"
                                        }`}
                                >
                                    Priority: {complaint?.priority}
                                </span>

                                <span className="rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                                    Complaint: {complaint?.status}
                                </span>
                            </div>

                            {/* Area */}
                            <div className="mt-5 border-t pt-4">
                                <p className="text-xs font-medium text-gray-500">
                                    AREA & ADDRESS
                                </p>
                                <p className="mt-1 font-medium text-gray-800">
                                    {complaint?.area?.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-600">
                                    {complaint?.address}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {complaint?.area?.district},{" "}
                                    {complaint?.area?.division}
                                </p>
                            </div>

                            {/* Customer */}
                            <div className="mt-4">
                                <p className="text-xs font-medium text-gray-500">
                                    CUSTOMER
                                </p>
                                <p className="mt-1 text-sm font-semibold text-gray-800">
                                    {complaint?.user?.name}
                                </p>
                                <p className="break-all text-sm text-gray-500">
                                    {complaint?.user?.email}
                                </p>
                                {complaint?.user?.phone && (
                                    <p className="text-sm text-gray-500">
                                        {complaint.user.phone}
                                    </p>
                                )}
                            </div>

                            {/* Technician */}
                            <div className="mt-4 rounded-lg bg-gray-50 p-3">
                                <p className="text-xs font-medium text-gray-500">
                                    ASSIGNED TECHNICIAN
                                </p>
                                <p className="mt-1 font-semibold text-gray-800">
                                    {assignment.technician?.name}
                                </p>
                                <p className="break-all text-sm text-gray-500">
                                    {assignment.technician?.email}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {assignment.technician?.phone}
                                </p>
                            </div>

                            {/* Assigned By */}
                            <div className="mt-4">
                                <p className="text-xs text-gray-500">
                                    Assigned by
                                </p>
                                <p className="text-sm font-medium text-gray-800">
                                    {assignment.assignedBy?.name}
                                </p>
                            </div>

                            {/* Date */}
                            <div className="mt-4 border-t pt-3">
                                <p className="text-xs text-gray-500">
                                    Assigned at
                                </p>
                                <p className="mt-1 text-sm text-gray-700">
                                    {new Date(assignment.assignedAt).toLocaleString(
                                        "en-GB",
                                        {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        }
                                    )}
                                </p>
                                {role === "ADMIN" || role === "TECHNICIAN" ?


                                    <Dialog>

                                        <DialogTrigger asChild>
                                            <Button >Update Status</Button>
                                        </DialogTrigger>
                                        <DialogContent className="w-full">
                                            <AssignUpdateStatus payload={{ id: assignment.id, status: assignment.status }} />
                                        </DialogContent>
                                    </Dialog>





                                    : ""}

                                    <Button variant="destructive" onClick={() => handleDelete(assignment.id)}>Delete</Button>

                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
