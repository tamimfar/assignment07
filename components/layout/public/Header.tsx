"use client"
import { Button } from "@/components/ui/button";
import { useGetMe, useLogout } from "@/hook";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { toast } from "sonner";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {
    CreditCardIcon,
    LogOutIcon,
    SettingsIcon,
    UserIcon,
    Zap,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MRoleGude } from "@/components/auth/MroleGude";
const Header = () => {
    const menu = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'About Us',
            href: '/about-us'
        }
    ]
    const { data, isLoading } = useGetMe()
    const { mutate: logout } = useLogout()
    const queryClient = useQueryClient()
    const handleLogout = () => {
        logout(undefined, {
            onSuccess: () => {
                toast.success("Logout successfully", { position: "top-right" });
                queryClient.removeQueries({ queryKey: ["user"] })
            },

            onError: () => {
                toast.error("Something went wrong", { position: "top-right" })
            }
        })
    }

    return (
        <header>
            <nav className="flex justify-around items-center py-3 border-b">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                        <Zap size={25} fill="currentColor" />
                    </div>
                    <div>
                        <p className="text-base font-extrabold tracking-tight">
                            Power<span className="text-emerald-600">Flow</span>
                        </p>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-500">
                            Power Management System
                        </p>
                    </div>
                </Link>
                <ul className="flex gap-3">
                    {menu.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <ul>
                    <li>
                        {!isLoading && !data && <Link href="/login"><Button>Login</Button></Link>}
                        {!isLoading && data && <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar>
                                    <AvatarImage
                                        src={data.data.avatar === null ? "https://github.com/shadcn.png" : data.data.avatar}
                                        alt="@shadcn"
                                        className="grayscale"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <MRoleGude role={[ "ADMIN", "USER"]}>
                                        <ul>
                                            <li>
                                                <Link href="/dashboard">Dashboard</Link>
                                            </li>
                                        </ul>
                                    </MRoleGude>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/profile" className="flex gap-1">
                                        <UserIcon />
                                        Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <CreditCardIcon />
                                    Billing
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <SettingsIcon />
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem variant="destructive" onClick={handleLogout}>
                                    <LogOutIcon />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>}

                    </li>
                </ul>

            </nav>
        </header>
    );
}

export default Header
