"use client";
import { ComplaintCards } from "@/components/table/Complain";
import useGetComplaint from "@/hook/complaint.hook";

export default function complain() {
    const { data, isPending, isError } = useGetComplaint();
    console.log(data?.data, 'complaints');
    return (
        <div>
            <ComplaintCards complaints={data?.data} />
        </div>
    );
}