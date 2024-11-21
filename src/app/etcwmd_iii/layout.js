"use client";

import React from "react";
import { AppSidebar } from "./components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Footer from "@/components/footer";
import { clsx } from "clsx";
import { LanguageSwitch } from "@/components/language-switch";

export default function Layout({ children }) {
    return (
        <main>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset className="mx-auto max-w-screen-2xl">
                    <header className="flex h-24 shrink-0 justify-between items-center gap-2 transition-[width,height] ease-linear bg-[#f47f1e] group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-24">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger size={12} className={clsx(
                                "hover:bg-transparent hover:text-white",
                                "text-white",
                                "[&_svg]:size-7 h-[84px] w-[59px]"
                            )} />
                            {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
                            <p className="invisible md:visible text-white text-sm">ระบบเทคโนโลยีสารสนเทศเพื่อรองรับระบบการบริหารการค้าสินค้าที่ใช้ได้สองทางของไทย (e-TCWMD)</p>
                            {/* <Breadcrumbs /> */}
                        </div>
                        <LanguageSwitch />
                    </header>
                    <div className="p-4 pt-0">{children}</div>
                    <Footer />
                </SidebarInset>
            </SidebarProvider>
        </main>
    );
}