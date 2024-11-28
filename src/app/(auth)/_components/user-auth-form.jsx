'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import Link from 'next/link';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function UserAuthForm() {
    const [user, setUser] = useState({ user_email: "", user_pw: "" });
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');
    const [loading, startTransition] = useTransition();

    const form = useForm();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const onSubmit = async () => {
        startTransition(() => {
            signIn('credentials', {
                user_email: user.user_email,
                user_pw: user.user_pw,
                callbackUrl: callbackUrl ?? '/dashboard'
            });
            toast.success('Signed In Successfully!');
        });
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-2"
                >
                    <Tabs defaultValue="login" className="w-[400px]">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="login">เข้าสู่ระบบ</TabsTrigger>
                            <TabsTrigger value="signup">ขึ้นทะเบียน</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                            <FormField

                                control={form.control}
                                name="user_email"
                                render={() => (
                                    <FormItem>
                                        <FormControl className="mb-3.5">
                                            <Input
                                                id="user_email"
                                                name="user_email"
                                                type="email"
                                                required
                                                value={user.user_email}
                                                onChange={handleChange}
                                                placeholder="อีเมล์"
                                                disabled={loading}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="user_pw"
                                render={() => (
                                    <FormItem>
                                        <FormControl className="mb-3.5">
                                            <Input
                                                id="user_pw"
                                                name="user_pw"
                                                type="password"
                                                required
                                                value={user.user_pw}
                                                onChange={handleChange}
                                                placeholder="รหัสผ่าน"
                                                disabled={loading}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button disabled={loading} className="ml-auto w-full" type="submit">
                                Login
                            </Button>
                        </TabsContent>

                        <TabsContent value="signup">
                            <a href="/etcwmd_iii/etc_pr_application_drafts" prefetch={false}>
                            </a>
                        </TabsContent>

                    </Tabs>
                </form>
            </Form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
            </div>
        </>
    );
}
