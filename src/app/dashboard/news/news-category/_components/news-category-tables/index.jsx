'use client';

import { DataTablePagination } from '@/components/ui/table/data-table';
import { columns } from '../news-category-tables/columns';
export default function NewsTable({
    data,
    totalData
}) {

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
            </div>
            <DataTablePagination columns={columns} data={data} totalItems={totalData} />
        </div>
    );
}
