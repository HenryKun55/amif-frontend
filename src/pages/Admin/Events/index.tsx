import { useListEventsQuery } from '@/api/events'
import { FetchDataProps, Table } from '@/components/Table'
import { useCallback, useMemo, useState } from 'react'
import { Column } from 'react-table'
import { Event } from '@/api/models'
import * as S from './styles'
import { format } from 'date-fns'
import {
  MdCheckCircleOutline,
  MdOutlineCancel,
  MdOutlineRemoveRedEye,
} from 'react-icons/md'
import { TableMenu } from '@/components/Table/Menu'
import { useNavigate } from 'react-router-dom'
import { AdminRoutes } from '@/routes/admin-routes'

export const AdminEvents = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading } = useListEventsQuery({ page })
  const navigate = useNavigate()

  const columns = useMemo(
    () =>
      [
        {
          Header: 'Título',
          accessor: 'title',
          defaultCanSort: true,
        },
        {
          Header: 'Descrição',
          accessor: 'description',
          defaultCanSort: true,
        },
        {
          id: 'startsAt',
          Header: 'Data',
          defaultCanSort: true,
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
        {
          Header: 'Ações',
          accessor: (event: Event) => (
            <TableMenu
              actions={[
                {
                  title: 'Ver',
                  icon: <MdOutlineRemoveRedEye size={20} />,
                  onClick: () =>
                    navigate(
                      AdminRoutes.Admin_Eventos_Id.replace(':id', event.id),
                    ),
                },
                {
                  title: event.isActive ? 'Desativar' : 'Ativar',
                  icon: event.isActive ? (
                    <MdOutlineCancel size={20} />
                  ) : (
                    <MdCheckCircleOutline size={20} />
                  ),
                  onClick: () => console.log('Active/Deactive'),
                },
              ]}
            />
          ),
        },
      ] as Column<Event>[],
    [],
  )

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
        isLoading={isLoading}
      />
    </S.Container>
  )
}
