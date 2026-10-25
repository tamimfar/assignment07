"use client";
import { useGetMe } from '@/hook';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
    const {data , isPending, isError} = useGetMe();
   
    const router = useRouter();
    
    if(data?.data) {
        return router.push('/');
    }
    return (
        
            <div>
                {children}
            </div>
       
    );
}