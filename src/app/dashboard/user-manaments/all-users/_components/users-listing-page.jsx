'use client';

import { useState } from 'react';
import PageContainer from '@/components/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import NewsTable from './users-tables';

async function getUsers() {
    const res = await fetch(
        'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
    );
    const data = await res.json();
    return data;
}

export default function UsersListingPage() {
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    // Fetch users on mount
    useState(() => {
        getUsers().then((data) => {
            setEmployees(data);
            setFilteredEmployees(data); // Initialize filteredEmployees with the full list
        });
    }, []);

    // Handle search input changes
    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchValue(value);

        // Filter employees based on search input
        const filtered = employees.filter((employee) =>
            employee.name.toLowerCase().includes(value)
        );
        setFilteredEmployees(filtered);
    };

    return (
        <PageContainer scrollable>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <Heading
                        title={`All user (${filteredEmployees.length})`}
                        description="Manage Users"
                    />

                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <Search className="h-5 w-5" />
                            </span>
                            <Input
                                placeholder="Search by name..."
                                value={searchValue}
                                onChange={handleSearch}
                                className="max-w-sm pl-10"
                            />
                        </div>

                        <Link
                            href={'/dashboard/users/add'}
                            className={cn(buttonVariants({ variant: 'default' }))}
                        >
                            <Plus className="mr-2 h-4 w-4" /> Add New
                        </Link>
                    </div>
                </div>
                <Separator />
                <NewsTable data={filteredEmployees} totalData={filteredEmployees.length} />
            </div>


        </PageContainer>
    );
}