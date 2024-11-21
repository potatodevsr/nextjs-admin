"use client";

import { ChevronRight } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

export default function SidebarNavigation({ sidebarItems }) {
    const pathname = usePathname();

    return (
        <div data-is="SidebarNavigation" className="w-full">
            {sidebarItems.map((navGroup) => (
                <SidebarGroup key={navGroup.id}>
                    {navGroup.label && (
                        <SidebarGroupLabel className="">{navGroup.label}</SidebarGroupLabel>
                    )}
                    <SidebarMenu>
                        {navGroup.items.map((item) => (
                            <Collapsible
                                key={item.title}
                                asChild
                                defaultOpen={item.isActive}
                                className="group/collapsible "
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <div
                                            className={clsx(
                                                "py-2 px-2",
                                                "group-data-[state=open]/collapsible:bg-gray-100",
                                                item.path.includes(pathname) && "bg-white"
                                            )}
                                        >
                                            <SidebarMenuButton
                                                tooltip={item.title}
                                                className={clsx(
                                                    "flex items-center hover:translate-x-1 transition-transform transform"
                                                )}
                                            >
                                                {item.icon && (
                                                    <Image
                                                        src={item.icon}
                                                        width={29}
                                                        height={29}
                                                        alt=""
                                                        className="mr-1 text-lg"
                                                    />
                                                )}
                                                <span className="font-medium">{item.title}</span>
                                                {item.subItems && (
                                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                )}
                                            </SidebarMenuButton>
                                        </div>
                                    </CollapsibleTrigger>
                                    {item.subItems && (
                                        <CollapsibleContent>
                                            <SidebarMenuSub className="mr-0 w-full">
                                                {item.subItems.map((subItem) => (
                                                    <SidebarMenuSubItem
                                                        key={subItem.title}
                                                        className="w-full py-2 pl-4"
                                                    >
                                                        {/* <SidebarMenuSubButton asChild className="hover:-translate-x-1 transition-transform transform">
                                                            <a
                                                                href={subItem.path}
                                                                className={clsx(
                                                                    subItem.path === pathname &&
                                                                    "bg-orange-500 text-white focus:bg-orange-500"
                                                                )}
                                                            >
                                                                {subItem.title}
                                                            </a>
                                                        </SidebarMenuSubButton> */}

                                                        <SidebarMenuSubButton asChild className="hover:-translate-x-1 transition-transform transform">
                                                            <a
                                                                href={subItem.path}
                                                                className={clsx(
                                                                    "focus:outline-none focus:text-white transition-colors",
                                                                    subItem.path === pathname && "bg-orange-500 text-white"
                                                                )}

                                                            >
                                                                {subItem.title}
                                                            </a>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    )}
                                </SidebarMenuItem>
                            </Collapsible>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            ))}
        </div>
    );
}
