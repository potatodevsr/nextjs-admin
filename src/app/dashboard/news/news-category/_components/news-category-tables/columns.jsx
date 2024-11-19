'use client';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { CellAction } from './cell-action';

export const columns = [
    {
        id: "number",
        header: "No.",
        cell: ({ row }) => row.index + 1,
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
        id: 'actions',
        cell: ({ row }) => <CellAction data={row.original} />
    }
];
