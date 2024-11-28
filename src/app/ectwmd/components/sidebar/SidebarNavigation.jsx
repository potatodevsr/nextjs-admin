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
import Link from "next/link";

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
                                                item.path.includes(pathname) && ""
                                            )}
                                        >

                                            {item.subItems?.length ?
                                                <SidebarMenuButton
                                                    tooltip={item.title}
                                                    className={clsx(
                                                        "flex items-center hover:translate-x-1 transition-transform transform",
                                                        item.path === pathname && "bg-[#f47f1e]"
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
                                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                </SidebarMenuButton>
                                                :
                                                <Link
                                                    href={item.path}
                                                    className={clsx(
                                                        "hover:translate-x-1 transition-transform transform",
                                                        "flex items-center focus:outline-none font-medium text-gray-600 hover:text-gray-600 p-2",

                                                    )}
                                                >
                                                    {item.icon && (
                                                        <Image
                                                            src={item.icon}
                                                            width={29}
                                                            height={29}
                                                            alt=""
                                                            className="mr-3 text-lg"
                                                        />
                                                    )}
                                                    <span className="font-medium">{item.title}</span>
                                                </Link>
                                            }

                                        </div>
                                    </CollapsibleTrigger>
                                    {item.subItems && (
                                        <CollapsibleContent>
                                            <SidebarMenuSub className="mr-0 w-full">
                                                {item.subItems.map((subItem) => (
                                                    <SidebarMenuSubItem
                                                        key={subItem.title}
                                                        className={clsx(
                                                            "w-full py-2 pl-4",
                                                            subItem.path === pathname && "bg-[#f47f1e]"
                                                        )}
                                                    >
                                                        <SidebarMenuSubButton asChild className="hover:-translate-x-1 transition-transform transform py-2">
                                                            <Link
                                                                href={subItem.path}
                                                                className={clsx(
                                                                    "flex items-center focus:outline-none",
                                                                    subItem.path === pathname && "text-white"
                                                                )}
                                                            >
                                                                {subItem.title}
                                                            </Link>
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
