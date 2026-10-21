"tsx"
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/type/use.type";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import Status from "../statusupdate/Status";
import { Separator } from "../ui/separator";

export const columns: ColumnDef<User, any>[] = [
  {
    accessorKey: "name",
    header: "User",
    
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.avatar || undefined} alt={user.name} />
            <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{user.name}</div>
            <div className="text-xs text-muted-foreground">{user.email}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => row.getValue("phone") || <span className="text-muted-foreground italic">N/A</span>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role: string = row.getValue("role");
      const variant = role === "ADMIN" ? "destructive" : role === "TECHNICIAN" ? "default" : "secondary";
      return <Badge variant={variant}>{role}</Badge>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status");
      const [id,setId] = useState("");
      const router = useRouter();
    const heandelStatas = (payload:{id: string}) => {
        const params = new URLSearchParams();
        console.log(payload.id);
        setId(payload.id);
        // params.set('id', payload.id);
        // router.push(`/users/status?${params.toString()}`);
    }
      return (
       
        <Popover>
  <PopoverTrigger >
     <Badge variant={status === "ACTIVE" ? "outline" : "secondary"} className={status === "ACTIVE" ? "bg-primary" : "bg-red-500"}>
            <Button className="bg-transparent hover:bg-transparent" onClick={()=> heandelStatas({id:row.original.id})} >{status}</Button>
         
        </Badge>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>update user status</PopoverTitle>
      <Separator />
      <Status id={id} />
      
    </PopoverHeader>
  </PopoverContent>
</Popover>
      );
    },
  },
  {
    accessorKey: "_count",
    header: "Activity Counts",
    cell: ({ row }) => {
      const count = row.original._count;
      return (
        <div className="text-xs text-muted-foreground space-x-2">
          <span>Complaints: {count.complaints}</span>
          <span>Payments: {count.payments}</span>
          <span>Reviews: {count.reviews}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return <span className="text-xs">{date.toLocaleDateString()}</span>;
    },
  },
];