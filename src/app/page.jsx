'use client'

import { useEffect } from "react";
import Image from "next/image";
import { AppLogo } from "../components/app-logo";
import { prompt } from '../components/fonts'
import Link from "next/link";
import { Button } from "../components/ui/button";
import { ArrowRightIcon } from 'lucide-react'
// import { redirect } from "next/navigation"

export default function Home() {
  // redirect("/dashboard")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('/api/users')
        const response = data.json()
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      fetchData()
    }
  }, [])
  return (
    <main className="flex min-h-screen flex-col " >
      <div className="flex h-20 shrink-0 items-center rounded-lg p-4 md:h-40 bg-secondary">
        <AppLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg  px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${prompt.className} text-xl md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Next 15 Admin Dashboard.</strong>
          </p>
          <Button asChild className="w-1/2">
            <Link href="/login">
              <span>Log in</span>
              <ArrowRightIcon className="w-6" />
            </Link>
          </Button>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            alt="Screenshots of the dashboard project showing desktop version"
            className="hidden md:block"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            alt="Screenshot of the dashboard project showing mobile version"
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}