import { columns } from './_components/columns'
import { DataTable } from './_components/data-table'

async function getUsers() {
    const res = await fetch(
        'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
    )
    const data = await res.json()
    return data
}

export default async function Page() {
    const data = await getUsers()
    return (
        <div>
            <h1 className='mb-4 text-3xl font-bold'>All Users</h1>
            <DataTable columns={columns} data={data} />
        </div>
    )
}