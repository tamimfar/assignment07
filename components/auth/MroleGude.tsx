"use client"
import { useGetMe } from "@/hook";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AuthLoding } from "./authLoding/AuthLoding";
import { UserRole } from "@/type";
import { AccessDenied } from "./accessDenied";


interface Props {
        children: React.ReactNode;
        role: UserRole[];
    }

export  const MRoleGude = ({ children ,role}:Props) => {

    const { data , isPending, isError} = useGetMe();
 const router = useRouter();
 const user = data?.data;
 const isAuthorized = !!user && role.includes(user.role);
   useEffect(() => {
     if (isPending) {
       return;
     }
     if (isError || !user) {
       router.replace("/login");
     }
   }, [isPending, isError, user]);

   if (isPending) {
     return ;
   }

   if (isError || !user) {
     return;
   }

   if(isAuthorized){
    return <>{children}</>;
   }

    return ;
};