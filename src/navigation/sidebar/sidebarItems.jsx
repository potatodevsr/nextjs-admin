import {
    File,
    Inbox,
    Send,
    Receipt,
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
                title: "Inbox",
                path: `${basePath}/inbox`,
                icon: Inbox
            },
            {
                title: "Invoice",
                path: "#",
                icon: Receipt,
                subItems: [
                    { title: "List", path: `${basePath}/invoice/list-preview` },
                    { title: "View", path: `${basePath}/invoice/view` },
                    { title: "Add", path: `${basePath}/invoice/add` },
                    { title: "Edit", path: `${basePath}/invoice/edit` }
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