"use client"
import { useParams, useSearchParams } from "next/navigation";

export default function User() {
   const params = useSearchParams();
   const id = params.get('id');
    return (
        <div>
            <h1>User {id}</h1>
        </div>
    )
}