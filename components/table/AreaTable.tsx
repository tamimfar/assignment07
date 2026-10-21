"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useDeleteArea, useGetArea } from "@/hook/area.hook";
import { Area } from "@/type";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Spinner } from "../ui/spinner";
import { useQueryClient } from "@tanstack/react-query";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import UpdateAreaForm from "../form/updateArea-form";

export function AreaTable() {
    const queryClient = useQueryClient()
    const router = useRouter();
    const { data } = useGetArea();
    const { mutate: deleteArea, isPending } = useDeleteArea("");
    const delete1 = async (id: string) => {
        deleteArea(id, {
            onSuccess: async () => {
                toast.success("Area deleted successfully", {
                    position: "top-right",

                });

                await queryClient.invalidateQueries({
                    queryKey: ["area"],
                });

                router.push("/area");
            },
            onError: () => {
                toast.error("Failed to delete area", {
                    position: "top-right",
                });
            },
        });
    }
    const handleDelete = (id: string) => {
        toast("Are you sure you want to delete this area?", {
            position: "top-right",
            action: (
                <Button
                    onClick={() => delete1(id)}
                    variant="destructive"
                    className="btn btn-primary"
                >

                    Delete
                </Button>
            ),
        });
    };



    return (
        <Table>
            <TableCaption>A list of Areas</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Area Name</TableHead>
                    <TableHead>District</TableHead>
                    <TableHead>Division</TableHead>
                    <TableHead className="text-right">Description</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.data.map((invoice: Area) => (
                    <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.name}</TableCell>
                        <TableCell>{invoice.district}</TableCell>
                        <TableCell>{invoice.division}</TableCell>
                        <TableCell className="text-right">{invoice.description}</TableCell>
                        <TableCell className="text-right ">

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="btn btn-primary mx-3">
                                        Edit
                                    </Button>
                                </DialogTrigger>

                                <DialogContent>
                                    <UpdateAreaForm  value={invoice}/>
                                </DialogContent>
                            </Dialog>
                            <Button
                                variant="destructive"
                                className="btn btn-primary"
                                disabled={isPending || !invoice?.id}
                                onClick={() => {
                                    if (invoice?.id) {
                                        handleDelete(invoice.id);
                                    }
                                }}
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
