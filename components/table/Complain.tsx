"use client"
import {
    AlertCircle,
    MapPin,
    User,
    Phone,
    CalendarDays,
    CheckCircle2,
    Clock,
    ShieldAlert,
    Sparkles
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import UpdateComplainForm from "../form/updateComplain-form";

import { ApiResponse } from "@/type";

import { useStore } from "zustand";

import { useEffect } from "react";
import { useUserStore } from "@/stores/userStore";
import { useDeleteComplaint } from "@/hook/complaint.hook";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { AssignComplainForm } from "../form/assign-form";
import { ComplainUpdateStatus } from "../form/updatecomplainStatus-form";
import { usePayment } from "@/hook/payment.hook";

type Complaint = {
    id: string;
    title: string;
    description: string;
    priority: string;
    status: string;
    address: string;
    createdAt: string;
    area: {
        id:string;
        name: string;
        district: string;
    };
    user: {
        name: string;
        email: string;
        phone: string | null;
    };
    assignment?: {
        technician: {
            name: string;
            phone: string;
        };
    } | null;
};

export function ComplaintCards({ complaints }: { complaints: Complaint[] }) {
    if (!complaints?.length) {
        return (
            <Card className="flex flex-col items-center p-10 text-center border-2 border-dashed border-emerald-200 bg-emerald-50/50 backdrop-blur-md rounded-3xl shadow-sm">
                <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-600 mb-3 animate-bounce">
                    <AlertCircle className="size-8" />
                </div>
                <h3 className="font-bold text-gray-800 text-base">No complaints found</h3>
                <p className="text-xs text-muted-foreground mt-1">Everything is running smoothly! ✨</p>
            </Card>
        );
    }

    // Priority Badge Color Helper
    const getPriorityBadge = (priority: string) => {
        switch (priority?.toUpperCase()) {
            case "LOW":
                return <Badge className="rounded-full bg-sky-500 text-white text-[10px] px-2.5 py-0.5">Low</Badge>;
            case "URGENT":
                return <Badge className="rounded-full bg-rose-500 text-white text-[10px] px-2.5 py-0.5">Urgent</Badge>;
            case "HIGH":
                return <Badge className="rounded-full bg-amber-500 text-white text-[10px] px-2.5 py-0.5">High</Badge>;
            default:
                return <Badge className="rounded-full bg-emerald-500 text-white text-[10px] px-2.5 py-0.5">Medium</Badge>;
        }
    };

    // Status Badge Color Helper
    const getStatusBadge = (status: string) => {
        switch (status?.toUpperCase()) {
            case "RESOLVED":
                return <Badge className="rounded-full bg-emerald-100 text-emerald-700 text-[10px] px-3 py-1 font-semibold gap-1"><CheckCircle2 className="size-3" /> Resolved</Badge>;
            case "ASSIGNED":
                return <Badge className="rounded-full bg-blue-100 text-blue-700 text-[10px] px-3 py-1 font-semibold gap-1"><Clock className="size-3" /> Assigned</Badge>;
            default:
                return <Badge className="rounded-full bg-amber-100 text-amber-700 text-[10px] px-3 py-1 font-semibold gap-1"><Sparkles className="size-3" /> Pending</Badge>;
        }
    };

 const user = useUserStore((state) => state.user);
 console.log(user);
 const queryClient = useQueryClient()
 const router = useRouter()
 const { mutateAsync: deleteComplaint } = useDeleteComplaint()
const handleDelete = (id: string) => {
    if(user?.role !== "ADMIN"){
        return;
    }
    toast.success("Are you sure you want to delete this complaint?", {
        position: "top-right",
        action: (
            <Button
                onClick={() =>{
                    deleteComplaint(id)
                    toast.success("Complaint deleted successfully", {
                        position: "top-right",
                    });
                    queryClient.invalidateQueries({ queryKey: ["complaint"] });
                    router.push("/complain");
                } }
                variant="destructive"
                className="btn btn-primary"
            >
                Delete
            </Button>
        ),
    });
}
const {mutate:payment} = usePayment()
const handlePayment = (id: string) => {
    if(user?.role !== "USER"){
        return;
    }
    payment(id,{onSuccess: () => {
        toast.success("payment successful", {
            position: "top-right",
        });
        queryClient.invalidateQueries({ queryKey: ["complaint"] });
        router.push("/complain");
    }})

    // toast.success("Are you sure you want to mark this complaint as paid?", {
    //     position: "top-right",
    //     action: (
    //         <Button
    //             onClick={() => {
    //                 toast.success("Complaint marked as paid", {
    //                     position: "top-right",
    //                 });
    //                 queryClient.invalidateQueries({ queryKey: ["complaint"] });
    //                 router.push("/complain");
    //             }}
    //             variant="destructive"
    //             className="btn btn-primary"
    //         >
    //             Mark as Paid
    //         </Button>
    //     ),
    // });
}
console.log(complaints);
    return (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {complaints.map((item) => (
                <Card
                    key={item.id}
                    className="group relative overflow-hidden rounded-3xl border border-emerald-100/80 bg-white/75 backdrop-blur-xl shadow-lg shadow-emerald-950/5 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:border-emerald-200"
                >
                    {/* Top Gradient Glow Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500" />

                    <CardHeader className="flex flex-row items-start justify-between p-5 pb-3">
                        <div className="flex items-start gap-3.5 min-w-0">
                            <div className="rounded-2xl bg-emerald-100/70 p-3 text-emerald-600 shadow-inner mt-1">
                                <ShieldAlert className="size-5" />
                            </div>
                            
                            <div className="min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    {getPriorityBadge(item.priority)}
                                    <span className="text-[10px] font-medium text-gray-400">ID: {item.id.slice(0, 8)}...</span>
                                </div>
                                <h2 className="text-base font-bold text-gray-800 line-clamp-1">
                                    {item.title}
                                </h2>
                                <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
                                    <MapPin className="size-3" /> {item.area?.name} ({item.area?.district})
                                </p>
                            </div>
                        </div>

                        {getStatusBadge(item.status)}
                    </CardHeader>

                    <CardContent className="space-y-4 p-5 pt-0 text-xs">
                        {/* Description Box */}
                        <div className="rounded-2xl bg-emerald-50/50 p-3.5 border border-emerald-100/60 text-gray-600 leading-relaxed">
                            <p className="font-medium text-[11px] text-emerald-800 uppercase tracking-wide mb-1">Description</p>
                            {item.description}
                        </div>

                        {/* Address & Date info */}
                        <div className="grid grid-cols-2 gap-2 text-gray-500 px-1">
                            <div className="flex items-center gap-1.5">
                                <MapPin className="size-3.5 text-emerald-600 shrink-0" />
                                <span className="truncate"><strong>Address:</strong> {item.address}</span>
                            </div>
                            <div className="flex items-center gap-1.5 justify-end">
                                <CalendarDays className="size-3.5 text-emerald-600 shrink-0" />
                                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>

                        <Separator className="bg-emerald-100/60" />

                        {/* User & Technician Info Footer */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl bg-white/50 p-3 border border-emerald-100/40">
                            {/* Complainant User */}
                            <div className="flex items-center gap-2 min-w-0">
                                <div className="rounded-full bg-emerald-100 p-2 text-emerald-700">
                                    <User className="size-3.5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-bold text-gray-800 truncate">{item.user?.name}</p>
                                    <p className="text-[10px] text-gray-400 truncate">{item.user?.phone ?? item.user?.email}</p>
                                </div>
                            </div>

                            {/* Assigned Technician (If exists) */}
                            {item.assignment?.technician && (
                                <div className="flex items-center gap-2 min-w-0 border-t sm:border-t-0 sm:border-l border-emerald-100 pt-2 sm:pt-0 sm:pl-3 w-full sm:w-auto">
                                    <div className="rounded-full bg-teal-100 p-2 text-teal-700">
                                        <Phone className="size-3.5" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-bold text-gray-800 truncate">Tech: {item.assignment.technician.name}</p>
                                        <p className="text-[10px] text-teal-600 truncate">{item.assignment.technician.phone}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardContent>
                    <CardFooter className="w-full">
                        {user?.role === "ADMIN" ?  <Button variant="destructive" onClick={() => handleDelete(item.id)}>Delete</Button> : null}
                       
                        <Dialog>

                            <DialogTrigger asChild>
                                <Button variant="default">Edit</Button>
                            </DialogTrigger>
                            <DialogContent className="w-full">
                               <UpdateComplainForm
                                    complain={{
                                        id:item.id,
                                        areaId: item.area.id,
                                        title: item.title,
                                        description: item.description,
                                        priority: item.priority,
                                        address: item.address,
                                    }}
                                    
                                />
                            </DialogContent>
                        </Dialog>
                           <Dialog>

                            <DialogTrigger asChild>
                                <Button variant="default">Assign</Button>
                            </DialogTrigger>
                            <DialogContent className="w-full">
                               <AssignComplainForm complaintId={item.id} />
                            </DialogContent>
                        </Dialog>
                         <Dialog>

                            <DialogTrigger asChild>
                                <Button variant="default">Status Update</Button>
                            </DialogTrigger>
                            <DialogContent className="w-full">
                               <ComplainUpdateStatus payload={{
                                id:item.id,
                               
                                status: item.status
                               }} />
                            </DialogContent>
                        </Dialog>
                          {
                            (item.status === "RESOLVED" && user?.role === "USER") && (
                               
                                <Button onClick={() => handlePayment(item.id)} variant="default">Payment</Button>
                           
                            )
                            
                          }
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}