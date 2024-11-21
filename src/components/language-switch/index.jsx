import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import "/node_modules/flag-icons/css/flag-icons.min.css";

export const LanguageSwitch = () => {
    const [state, setstate] = useState("fi fi-gr");
    return (
        <DropdownMenu>
            <DropdownMenuTrigger data-is="LanguageSwitch" className='px-8 py-4 outline-none'><div className='fi fi-th p-3'></div></DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4 py-2 px-0 shadow-2xl rounded-none border-none min-w-[196px]">

                <DropdownMenuItem className="text-md px-4 h-[38px]"><div className='fi fi-th p-3 mr-1'></div> ไทย</DropdownMenuItem>
                <DropdownMenuItem className="text-md px-4 h-[38px]"><div className='fi fi-us p-3 mr-1'></div> English</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
