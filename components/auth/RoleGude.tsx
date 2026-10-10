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

export  const RoleGude = ({ children ,role}:Props) => {

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
     return <div><AuthLoding /></div>;
   }

   if (isError || !user) {
     return <div ><AuthLoding /></div>;
   }

   if(isAuthorized){
    return <>{children}</>;
   }

    return <div><AccessDenied /></div>;
};