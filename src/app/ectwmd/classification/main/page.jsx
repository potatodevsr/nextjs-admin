"use client"

import React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
    return (
        <div>
            <div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <Card>

                            <CardHeader>
                                <CardTitle className="border-b border-black leading-[3.5rem]">
                                    ช่องทางการจำแนกสินค้าด้วย EU Dual-Use List 2019
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                {/*  การจำแนกสินค้าด้วยคำค้น */}
                                <Link href="/etcwmd_iii/classification/keyword_search" prefetch={false}>
                                    <Card className="bg-[#2e3691] text-white">
                                        <CardHeader>
                                            <div className="flex items-center p-4">
                                                {/* Align image to the left */}
                                                <Image
                                                    alt="search"
                                                    src="/dui-search.png"
                                                    width={100}
                                                    height={69}
                                                    className="shrink-0"
                                                />
                                                {/* Text section centered vertically */}
                                                <div className="flex flex-col justify-center text-center w-full">
                                                    <CardTitle className="text-lg">
                                                        ค้นหาด้วยคำค้น หรือ รหัสสินค้าที่ใช้ได้สองทาง
                                                    </CardTitle>
                                                    <CardDescription className="text-sm text-white">
                                                        (Keyword Search or DUI Number)
                                                    </CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            </CardContent>

                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
                                <CardContent className="col-span-2 lg:col-span-3">
                                    {/* Link to ค้นหาด้วยพิกัดอัตราศุลกากร */}
                                    <Link href="/etcwmd_iii/classification/multi_hs_codes" prefetch={false}>
                                        <Card className="bg-[#2e3691] text-white">
                                            <CardHeader className="flex flex-col items-center justify-center p-6">
                                                <Image alt="search" src="/hs-code.png" width={80} height={80} />
                                                <div className="text-center mt-4">
                                                    <CardTitle className="text-lg font-bold">ค้นหาด้วยพิกัดอัตราศุลกากร</CardTitle>
                                                    <CardDescription className="text-sm mt-2 text-white">(HS Code)</CardDescription>
                                                </div>
                                            </CardHeader>
                                        </Card>
                                    </Link>
                                </CardContent>


                                <CardContent className="col-span-2 lg:col-span-3">
                                    {/* Link to ค้นหาด้วยรหัสสารเคมี */}
                                    <Link href="/etcwmd_iii/classification/multi_cas_numbers" prefetch={false}>
                                        <Card className="bg-[#2e3691] text-white">
                                            <CardHeader className="flex flex-col items-center justify-center p-6">
                                                <Image alt="search" src="/dui-03.png" width={80} height={80} />
                                                <div className="text-center mt-4">
                                                    <CardTitle className="text-lg font-bold">ค้นหาด้วยรหัสสารเคมี</CardTitle>
                                                    <CardDescription className="text-sm mt-2 text-white">(Cas Number)</CardDescription>
                                                </div>
                                            </CardHeader>
                                        </Card>
                                    </Link>
                                </CardContent>
                            </div>
                        </Card>


                        <Card>
                            {/*  ช่องทางเสริมสำหรับการจำแนกสินค้า */}
                            <CardHeader>
                                <CardTitle className="border-b border-black leading-[3.5rem]">
                                    ช่องทางเสริมสำหรับการจำแนกสินค้า
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardHeader className="text-text-orange">
                                    <div>
                                        <ul className="list-circle pl-5 marker:text-marker">
                                            <li className="pt-1">
                                                <a
                                                    href="/etcwmd_iii/cs_30002"
                                                    className="text-link hover:text-link-hover"
                                                >
                                                    จำแนกด้วยคำค้นในบัญชีคู่มือรายการสินค้าของสหรัฐอเมริกา (Alphabetical Index to the Commerce Control List; CCL List)
                                                </a>
                                            </li>
                                            <li className="pt-1">
                                                <a
                                                    href="/etcwmd_iii/cs30003"
                                                    className="text-link hover:text-link-hover"
                                                >
                                                    รหัสสินค้าที่ใช้ได้สองทาง (List of Dual-use Items Code) ของไทยที่ควบคุมภายใต้กรมการค้าต่างประเทศและหน่วยงานอื่น
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </CardHeader>

                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div >
        </div >
    )
}