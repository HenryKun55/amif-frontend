import { Table } from '@/components/Table'
import { useMemo } from 'react'
import { Column } from 'react-table'
import * as S from './styles'

type TableData = {
  name: string
  phoneNumber: string
  email: string
  lastActivity: string
  createdIn: string
}

export const AdminEvents = () => {
  const columns = useMemo(
    () =>
      [
        {
          Header: 'Name',
          accessor: 'name',
          defaultCanSort: true,
        },
        {
          Header: 'Phone Number',
          accessor: 'phoneNumber',
          defaultCanSort: true,
        },
        {
          Header: 'Email',
          accessor: 'email',
        },
        {
          Header: 'Last Activity',
          accessor: 'lastActivity',
        },
        {
          Header: 'Created At',
          accessor: 'createdIn',
          defaultCanSort: true,
        },
      ] as Column<TableData>[],
    [],
  )
  const data = [
    ...Array.from({ length: 25 }).map((_, index) => ({
      name: 'Jon Doe ' + (index + 1),
      email: 'jondoe@email.com',
      phoneNumber: '+1 255 999 9999',
      lastActivity: 'sms 2 Weeks ago',
      createdIn: 'Feb 17 2020',
    })),
  ]

  return (
    <S.Container>
      <Table<TableData>
        data={data}
        columns={columns}
        pageSize={20}
        totalPages={25}
        totalCount={500}
        isSelectable
        onFetchData={() => console.log('Fetch data')}
      />
    </S.Container>
  )
}
