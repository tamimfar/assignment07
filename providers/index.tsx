"use client";
import { ReactNode } from "react";
import QueryProvider from "./Query.Provider";
import { GoogleAuthProvider } from "./googleAuthProvider";

export default function Providers({children}: {children:ReactNode}){

    return (
        <GoogleAuthProvider>
        <QueryProvider>{children}</QueryProvider>
        </GoogleAuthProvider>
    )

}