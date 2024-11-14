"use client"
import { MoreHorizontal, ArrowUpDown, Edit, Trash } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

export const columns = [
    {
        id: "number",
        header: "No.",
        cell: ({ row }) => row.index + 1, // Display row index, no sorting applied
    },
    {
        accessorKey: "avatar",
        header: "Profile",
        cell: ({ row }) => {
            const avatarUrl = row.getValue("avatar");
            const name = row.getValue("name");

            return (
                <Avatar>
                    <AvatarImage src={avatarUrl} alt={`${name}'s profile`} />
                    <AvatarFallback>{name ? name.charAt(0) : "?"}</AvatarFallback>
                </Avatar>
            );
        },
    },
    {
        accessorKey: "name",
        header: 'Name'
    },
    {
        accessorKey: "email",
        header: "Email"
    },
    {
        accessorKey: "lastSeen",
        header: "Last seen",
        cell: ({ row }) => {
            const date = new Date(row.getValue("lastSeen"));
            const formatted = date.toLocaleDateString();
            return <div className="font-medium">{formatted}</div>;
        }
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const user = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() => router.push(`/dashboard/user/${user.id}`)}
                        >
                            <Edit className="mr-2 h-4 w-4" /> Update
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setOpen(true)}>
                            <Trash className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }
    }
];

