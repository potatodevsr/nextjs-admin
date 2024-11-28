"use client"

import * as React from "react"
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import { LogoDashboard } from "./logo-dashboard";
import { sidebarItems } from "@/navigation/sidebar/sidebarItems"
import SidebarFooterMenu from "./sidebarFooterMenu"
import SidebarNavigation from "./sidebarNavigation"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { clsx } from "clsx";
import { useSidebar } from "@/components/ui/sidebar"

export function AppSidebar({ ...props }) {
    const { state } = useSidebar();
    return (
        <Sidebar collapsible="icon" {...props}>
            <div className="bg-repeat-x bg-bottom bg-origin-padding  bg-[url('/bg-menu-1.jpg')] min-h-[100dvh]">
                <SidebarHeader className="h-24 items-center justify-center p-0">
                    <Image
                        src="/logo-dft.png"
                        alt=""
                        className={state === "collapsed" ? "hidden" : ""}
                        width={202}
                        height={74}
                    />
                </SidebarHeader>

                <div className={
                    clsx(
                        "bg-gradient-to-r from-[#dadada] via-[#f8f8fb] to-[#f1f1f1]",
                        "pt-[14px] pb-[14px]",
                        'h-[79px]'
                    )}>
                    <div className="user-info text-center pt-1 pb-1">
                        <div className="name-wrapper d-block dropdown">
                            <span className={clsx("user-name", state === "collapsed" ? "hidden" : "")}>
                                ผู้ประกอบการ
                                <div className="text-black/50">
                                    กลุ่มผู้ประกอบการ (ยังไม่ขึ้นทะเบียน)
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <SidebarContent className="min-h-[calc(100dvh-96px)]">
                    <SidebarNavigation sidebarItems={sidebarItems} />
                </SidebarContent>
                <SidebarRail />
            </div>
        </Sidebar>
    )
}