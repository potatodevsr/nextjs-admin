"use client"

import * as React from "react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import { LogoDashboard } from "@/app/dashboard/components/sidebar/logo-dashboard";
import { sidebarItems } from "@/navigation/sidebar/sidebarItems"
import SidebarFooterMenu from "./sidebarFooterMenu"
import SidebarNavigation from "./sidebarNavigation"

const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "",
}
const logo = [
    {
        name: "Admin Dashboard",
        logo: "/logo.png",
    }
];

export function AppSidebar({ ...props }) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <LogoDashboard logo={logo} />
            </SidebarHeader>
            <SidebarContent>
                <SidebarNavigation sidebarItems={sidebarItems} />
            </SidebarContent>
            <SidebarFooter>
                <SidebarFooterMenu user={user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}