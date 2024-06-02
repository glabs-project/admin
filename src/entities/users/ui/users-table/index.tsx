'use client'

import { FC } from 'react'

import { type UsersList } from '../../model'

import { columns } from './columns'
import { DataTable } from './data-table'

interface Props {
  users: UsersList[]
}

export const UsersTable: FC<Props> = ({ users }) => {
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <h1 className="font-semibold text-2xl">Информация о пользователях</h1>

        <div className="flex flex-col gap-y-2">
          <h3 className="font-medium text-xl">Список: </h3>

          <DataTable columns={columns} data={users} />
        </div>
      </div>
    </div>
  )
}
