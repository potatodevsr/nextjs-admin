import PageContainer from '@/components/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import NewsTable from './news-category-tables';

async function getUsers() {
    const res = await fetch(
        'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
    )
    const data = await res.json()
    return data
}

export default async function NewsListingPage() {
    const employees = await getUsers();
    const totalUsers = employees.length;

    return (
        <PageContainer scrollable>

            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <Heading
                        title={`Employee (${totalUsers})`}
                        description="Manage employees (Server side table functionalities.)"
                    />

                    <Link
                        href={'/dashboard/news/add'}
                        className={cn(buttonVariants({ variant: 'default' }))}
                    >
                        <Plus className="mr-2 h-4 w-4" /> Add New
                    </Link>
                </div>
                <Separator />
                <NewsTable data={employees} totalData={totalUsers} />
            </div>
        </PageContainer>
    );
}