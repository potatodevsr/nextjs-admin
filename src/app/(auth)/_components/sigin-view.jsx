import Link from "next/link"
import UserAuthForm from "./user-auth-form";
import { AppLogo } from "@/components/app-logo";
import Image from "next/image";

export function SignInViewPage() {
    return (
        <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                <div className="absolute inset-0 z-10">
                    <Image
                        src="/businessmen-meeting-bg.jpg"
                        alt="Background image"
                        layout="fill"
                        objectFit="cover"
                        priority
                        quality={100}
                    />
                </div>
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <AppLogo />
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quibusdam. Repudiandae laborum voluptatum natus quos nemo reiciendis consequuntur nulla repellendus? Est illo laudantium quae, labore eveniet inventore omnis quas et.&rdquo;
                        </p>
                        <footer className="text-sm">Admin Dashboard</footer>
                    </blockquote>
                </div>
            </div>

            <div className="flex h-full items-center p-4 lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Login to your account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Please enter login details below.
                        </p>
                    </div>
                    {/* login form*/}
                    <UserAuthForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    );
}