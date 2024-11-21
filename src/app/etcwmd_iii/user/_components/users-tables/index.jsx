'use client';

import { DataTablePagination } from '@/components/ui/table/data-table';
import { columns } from './columns';
export default function UsersTable({
    data,
    totalData
}) {
    return (
        <div className="space-y-4">
            <DataTablePagination columns={columns} data={data} totalItems={totalData} />
        </div>
    );
}
