const basePath = "/etcwmd_iii"

export const sidebarItems = [
    {
        id: 1,
        // label: "Pages", 
        items: [
            {
                title: "เข้าสู่ระบบ",
                path: `${basePath}/contect`,
                icon: "https://icongr.am/entypo/publish.svg?size=125&color=555766"
            },
            {
                title: "e-Self Classification",
                path: "#",
                icon: "https://icongr.am/entypo/archive.svg?size=125&color=555766",
                subItems: [
                    { title: "การจำแนกสินค้า", path: `${basePath}/classification/news` },
                    { title: "ตรวจสอบ Cas Number", path: `${basePath}/classification/tcwmd` },
                    { title: "หน่วยงานที่ควบคุม DUI", path: `${basePath}/classification/user-manual` },
                ]
            },
            {
                title: "เพิ่มเติม",
                path: "#",
                icon: "https://icongr.am/material/cards-heart.svg?size=125&color=555766",
                subItems: [
                    { title: "ข่าวสารประชาสัมพันธ์", path: `${basePath}/information/news` },
                    { title: "ท่องโลก TCWMD", path: `${basePath}/information/tcwmd` },
                    { title: "คู่มือการใช้งาน", path: `${basePath}/information/user-manual` },
                    { title: "กฎหมายที่เกี่ยวข้อง", path: `${basePath}/information/lows` },
                    { title: "ติดต่อเรา", path: `${basePath}/information/contact` },
                    { title: "Privacy Policy", path: `${basePath}/information/privacy-policy` },
                ]
            }
        ]
    }
]