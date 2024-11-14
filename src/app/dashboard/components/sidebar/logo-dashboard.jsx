"use client"

import * as React from "react"
import Image from "next/image";  // Import Image from next/image
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

export function LogoDashboard({ logo }) {
    const [activeTeam] = React.useState(logo[0]);

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <Image
                        src={activeTeam.logo}
                        alt={activeTeam.name}
                        width={40}
                        height={40}
                    />
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">{activeTeam.name}</span>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
