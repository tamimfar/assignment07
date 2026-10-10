"use client";

import { columns } from "@/components/users/column";
import { DataTable } from "@/components/users/data-table";
import { useUser } from "@/hook";

export default function UsersPage() {
  const { data, isLoading } = useUser();

  // 👉 Ekhane console-log ta bhalo kore dekho:
  console.log("Full useUser data:", data);

  if (isLoading) {
    return <div className="container mx-auto py-10 text-center">Loading users...</div>;
  }

  // 🔍 Check korun data ta direct array naki data.data array
  // Jodi `data` direct array hoy (e.g. [ {id: ...}, {id: ...} ]), tahole shudhu `data` pass korben.
  // Jodi `data` object hoyar por tar vitor `data` thake, tahole `data?.data` pass korben.
  
  const usersArray = Array.isArray(data) ? data : (data?.data ?? []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      <DataTable columns={columns} data={usersArray} />
    </div>
  );
}