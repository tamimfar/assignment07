"use client";

import { columns } from "@/components/users/column";
import { DataTable } from "@/components/users/data-table";
import { useUser } from "@/hook";
import { useRouter } from "next/navigation";

export default function UsersPage() {
  const {data, isLoading } = useUser();


  


  if (isLoading) {
    return <div className="container mx-auto py-10 text-center">Loading users...</div>;
  }


  
  const usersArray = Array.isArray(data) ? data : (data?.data ?? []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      <DataTable columns={columns} data={usersArray} />
    </div>
  );
}