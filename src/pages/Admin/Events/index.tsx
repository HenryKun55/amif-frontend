import { format } from 'date-fns'
import { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  MdCheckCircleOutline,
  MdOutlineCancel,
  MdOutlineRemoveRedEye,
  MdSearch,
} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Column } from 'react-table'

import {
  useActivateEventMutation,
  useDeactivateEventMutation,
  useListEventsQuery,
} from '@/api/events'
import { EventSortBy } from '@/api/events/types'
import { Event } from '@/api/models'
import { Order } from '@/api/types'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FetchDataProps, Table } from '@/components/Table'
import { TableMenu } from '@/components/Table/Menu'
import { useDebounce } from '@/hooks/useDebounce'
import { AdminRoutes } from '@/routes/admin-routes'

import * as S from './styles'

export const AdminEvents = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [sortBy, setSortBy] = useState<keyof EventSortBy | undefined>(
    'startDate',
  )
  const [orderBy, setOrderBy] = useState<Order>('desc')

  const { register, watch } = useForm()
  const searchDebounced = useDebounce(watch('search'), 300)

  const { data, isLoading } = useListEventsQuery({
    page,
    orderBy,
    sortBy,
    title: searchDebounced,
  })
  const [activateEvent, { isLoading: isActivating }] =
    useActivateEventMutation()
  const [deactivateEvent, { isLoading: isDeactivating }] =
    useDeactivateEventMutation()

  const handleActivaDeactiveEvent = useCallback((event: Event) => {
    if (event.isActive) {
      deactivateEvent({ id: event.id })
    } else {
      activateEvent({ id: event.id })
    }
  }, [])

  const columns = useMemo(
    () =>
      [
        {
          Header: 'Título',
          accessor: 'title',
          defaultCanSort: true,
          responsive: true,
        },
        {
          Header: 'Descrição',
          accessor: 'description',
          responsive: true,
        },
        {
          id: 'startDate',
          Header: 'Data',
          defaultCanSort: true,
          maxWidth: '15ch',
          accessor: (event: Event) => {
            try {
              const [date] = event.startDate.split('T')
              return format(
                new Date(`${date}T${event.startHour}:00`),
                'dd/MM/yyyy HH:mm',
              )
            } catch (error) {
              return 'Sem data'
            }
          },
        },
        {
          id: 'isMain',
          Header: 'Principal',
          maxWidth: '8ch',
          accessor: (event: Event) =>
            event.isMain ? (
              <MdCheckCircleOutline size={20} color="green" />
            ) : null,
        },
        {
          id: 'isActive',
          Header: 'Ativo',
          maxWidth: '8ch',
          defaultCanSort: true,
          accessor: (event: Event) =>
            event.isActive ? (
              <MdCheckCircleOutline size={20} color="green" />
            ) : (
              <MdOutlineCancel size={20} color="red" />
            ),
        },
        {
          id: 'createdAt',
          Header: 'Data de Criação',
          maxWidth: '15ch',
          defaultCanSort: true,
          accessor: (event: Event) =>
            event.createdAt
              ? format(new Date(event.createdAt), 'dd/MM/yyyy HH:mm')
              : '',
        },
        {
          id: 'actions',
          Header: 'Ações',
          maxWidth: '8ch',
          accessor: (event: Event) => (
            <TableMenu
              disabled={isActivating || isDeactivating}
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
                    <MdOutlineCancel size={20} color="red" />
                  ) : (
                    <MdCheckCircleOutline size={20} color="green" />
                  ),
                  onClick: () => handleActivaDeactiveEvent(event),
                },
              ]}
            />
          ),
        },
      ] as unknown as Column<Event>[],
    [],
  )

  const handleFetchData = useCallback((args: FetchDataProps<Event>) => {
    setPage(args.pageIndex + 1)
    setOrderBy(args.orderBy || 'desc')
    setSortBy((args.sortBy || 'startDate') as keyof EventSortBy)
  }, [])

  return (
    <S.Container>
      <Breadcrumb
        path={['Eventos']}
        showButton
        buttonAsLink
        href={AdminRoutes.Admin_Eventos_Criar}
      />
      <S.Content>
        <S.Input
          leftIcon={<MdSearch size={18} color="gray" />}
          shape="pill"
          label="Pesquisar por título"
          register={register}
          name="search"
          height="sm"
        />
        <Table<Event>
          data={data?.data || []}
          columns={columns}
          pageSize={data?.perPage || 0}
          totalPages={data?.totalPages || 0}
          totalCount={data?.total || 0}
          onFetchData={handleFetchData}
          isLoading={isLoading}
        />
      </S.Content>
    </S.Container>
  )
}
