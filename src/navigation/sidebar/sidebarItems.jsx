const basePath = "/ectwmd"


export const sidebarItems = [
    {
        id: 1,
        items: [
            {
                title: "เข้าสู่ระบบ",
                path: `${basePath}/login`,
                icon: "https://icongr.am/entypo/publish.svg?size=125&color=555766"
            },
            {
                title: "e-Self Classification",
                path: "#",
                icon: "https://icongr.am/entypo/archive.svg?size=125&color=555766",
                subItems: [
                    { title: "การจำแนกสินค้า", path: `${basePath}/classification/main` },
                    { title: "ตรวจสอบ Cas Number", path: `${basePath}/classification/multi_cas_numbers` },
                    { title: "หน่วยงานที่ควบคุม DUI", path: `${basePath}/classification/cs30003` },
                ]
            },
            {
                title: "ข่าวสารประชาสัมพันธ์",
                path: `${basePath}/news`,
                icon: "https://icongr.am/entypo/megaphone.svg?size=128&color=555766",
            },
        ]
    }
]
