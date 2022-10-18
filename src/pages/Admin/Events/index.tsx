import { useListEventsQuery } from '@/api/events'
import { FetchDataProps, Table } from '@/components/Table'
import { useCallback, useMemo, useState } from 'react'
import { Column } from 'react-table'
import { Event } from '@/api/models'
import * as S from './styles'
import { format } from 'date-fns'
import { MdCheckCircleOutline, MdOutlineCancel } from 'react-icons/md'

export const AdminEvents = () => {
  const [page, setPage] = useState(1)
  const { data } = useListEventsQuery({ page })

  const columns = useMemo(
    () =>
      [
        {
          Header: 'Título',
          accessor: 'title',
        },
        {
          Header: 'Descrição',
          accessor: 'description',
        },
        {
          id: 'startsAt',
          Header: 'Data',
          accessor: (event: Event) =>
            format(new Date(event.startsAt || ''), 'dd/MM/yyyy'),
        },
        {
          id: 'isMain',
          Header: 'Principal',
          accessor: (event: Event) =>
            event.isMain ? (
              <MdCheckCircleOutline size={20} color="green" />
            ) : null,
        },
        {
          id: 'isActive',
          Header: 'Ativo',
          accessor: (event: Event) =>
            event.isActive ? (
              <MdCheckCircleOutline size={20} color="green" />
            ) : (
              <MdOutlineCancel size={20} color="red" />
            ),
        },
        // {
        //   Header: 'Ações',
        //   accessor: (event: Event) => (
        //     <
        //   ),
        // },
      ] as Column<Event>[],
    [],
  )

  console.log(data)

  const handleFetchData = useCallback((args: FetchDataProps<Event>) => {
    setPage(args.pageIndex + 1)
  }, [])

  return (
    <S.Container>
      <Table<Event>
        data={data?.data || []}
        columns={columns}
        pageSize={data?.perPage || 0}
        totalPages={data?.totalPages || 0}
        totalCount={data?.total || 0}
        onFetchData={handleFetchData}
      />
    </S.Container>
  )
}
