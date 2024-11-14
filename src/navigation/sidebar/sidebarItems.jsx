import {
    File,
    UserCog,
    Send,
    KeySquare,
    PanelsTopLeft
} from "lucide-react"

const basePath = "/dashboard"

export const sidebarItems = [
    {
        id: 1,
        label: "Overview",
        items: [
            {
                title: "Dashboard",
                path: basePath,
                icon: PanelsTopLeft,
                isActive: true
            }
        ]
    },
    {
        id: 2,
        label: "Pages",
        items: [
            {
                title: "User Manaments",
                path: "#",
                icon: UserCog,
                subItems: [
                    { title: "All Users", path: `${basePath}/users` },
                    { title: "Sub Page 2", path: `${basePath}/unauthorized` },
                    { title: "Sub Page 3", path: `${basePath}/unauthorized` },
                    { title: "Sub Page 4", path: `${basePath}/unauthorized` }
                ]
            },
            {
                title: "Auth",
                path: "#",
                icon: KeySquare,
                subItems: [
                    { title: "Unauthorized", path: `${basePath}/auth/unauthorized` }
                ]
            },
            {
                title: "Drafts",
                path: `${basePath}/drafts`,
                icon: File
            },
            {
                title: "Sent",
                path: `${basePath}/sent`,
                icon: Send
            }
        ]
    }
]