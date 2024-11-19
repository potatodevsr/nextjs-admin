import {
    UserCog,
    MapPinHouse,
    Newspaper,
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
                    { title: "All Users", path: `${basePath}/user-manaments/all-users` },
                    { title: "Sub Page 2", path: `${basePath}/unauthorized` },
                    { title: "Sub Page 3", path: `${basePath}/unauthorized` },
                    { title: "Sub Page 4", path: `${basePath}/unauthorized` }
                ]
            },
            {
                title: "Contect Us",
                path: `${basePath}/contect-us`,
                icon: MapPinHouse
            },
        ]
    }
]