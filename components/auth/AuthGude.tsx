"use client"
import { useGetMe } from "@/hook";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AuthLoding } from "./authLoding/AuthLoding";

export  const AuthGude = ({ children }: { children: React.ReactNode }) => {
    const { data , isPending, isError} = useGetMe();
 const router = useRouter();
 const user = data?.data;
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

    return <div>{children}</div>;
};