import Link from "next/link"
import UserAuthForm from "./user-auth-form";
import { AppLogo } from "@/components/app-logo";
import Image from "next/image";



export function SignInViewPage() {
    return (
        <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            {/* Left section */}
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r w-[550px]">
                <div className="absolute inset-0 z-10 ">
                    <Image
                        src="/img2.jpg"
                        alt="Background image"
                        layout="fill"
                        objectFit="cover"
                        priority
                        quality={100}
                    />
                </div>
                <div className="relative z-20 flex items-center justify-center h-full">
                    {/* Logo centered */}

                    <div className="relative w-[200px] h-[100px]">
                        <Image
                            src="/logo_tcwmd.png"
                            alt="Logo tcwmd"
                            layout="fill"
                            objectFit="contain"
                            priority
                            quality={100}
                        />
                    </div>
                </div>
            </div>

            {/* Right section */}
            <div className="flex h-full items-center p-4 lg:p-8">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg-auth-form.jpg"
                        alt="Background image form"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority
                    />
                </div>
                <div className="z-20 mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h3 className="text-white">
                            e-TCWMD
                        </h3>
                        <p className="text-white">
                            ระบบเทคโนโลยีสารสนเทศควบคุมการแพร่ขยายอาวุธที่มีอานุภาพทำลายล้างสูง
                        </p>
                    </div>
                    {/* Login form */}
                    <UserAuthForm />

                    <p className="leading-relaxed text-center text-muted-foreground px-8">
                        หากท่านพบปัญหาความผิดพลาดของระบบ e-TCWMD กรุณา capture หน้าจอและแจ้งปัญหาการใช้งานของท่าน พร้อมกับ Username และหมายเลข Screen ID (แสดงที่มุมซ้ายล่างของหน้าจอ) ผ่านอีเมล์
                        <a href="mailto:etcwmd.dft@gmail.com" className="text-blue-600 hover:underline">
                            etcwmd.dft@gmail.com
                        </a>
                    </p>

                </div>
            </div>
        </div>
    );
}