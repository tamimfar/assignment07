"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.

import  {adminRouter } from "../router/admin.router"
import {technecianRouter} from "../router/technecian.router"
import {userRouter} from "../router/user.router"
import { useUserStore } from "@/stores/userStore"
export function AppSidebar() {
  type data = {
 navMain: {
 title: string;
 url: string;
 items: {
 title: string;
 url: string;
 }[];
 }[];
} | undefined
  const user = useUserStore((state) => state.user)
  let role = user?.role
  let menu:data 

  if (role === "ADMIN") {
    menu = adminRouter
  }
   if (role === "USER") {
    menu = userRouter
  }
  if(role === "TECHNICIAN"){
    menu = technecianRouter
  }

  return (
    <Sidebar >
      <SidebarHeader>
       <h1>LOGO</h1>
       
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {menu?.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton >
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
