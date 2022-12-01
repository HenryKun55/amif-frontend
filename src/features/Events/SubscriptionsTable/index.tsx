import { format } from 'date-fns'
import { useCallback, useMemo, useState } from 'react'
import { Column } from 'react-table'

import { useListEventSubscriptionsQuery } from '@/api/events'
import { SubscriptionsSortBy } from '@/api/events/types'
import { Subscription } from '@/api/models'
import { Order } from '@/api/types'
import { FetchDataProps, Table } from '@/components/Table'

import * as S from './styles'

export type SubscriptionsTableProps = {
  eventId: string
}

export const SubscriptionsTable = ({ eventId }: SubscriptionsTableProps) => {
  const [page, setPage] = useState(1)
  const [sortBy, setSortBy] = useState<keyof SubscriptionsSortBy | undefined>(
    'createdAt',
  )
  const [orderBy, setOrderBy] = useState<Order>('desc')

  const { data, isLoading } = useListEventSubscriptionsQuery({
    eventId,
    page,
    orderBy,
    sortBy,
  })

  const columns = useMemo(
    () =>
      [
        {
          Header: 'Nome',
          accessor: 'name',
        },
        {
          Header: 'E-mail',
          accessor: 'email',
        },
        {
          Header: 'Telefone',
          accessor: 'phone',
        },
        {
          Header: 'Igreja',
          accessor: 'church',
        },
        {
          Header: 'Pastor',
          accessor: 'pastorName',
          responsive: true,
        },
        {
          id: 'alreadyHeard',
          Header: 'Já ouviu falar da AMIF?',
          responsive: true,
          accessor: (subscription: Subscription) =>
            subscription.alreadyHeard ? 'Sim' : 'Não',
        },
        {
          Header: 'Por onde conheceu a AMIF',
          accessor: 'howKnow',
          responsive: true,
        },
        {
          id: 'createdAt',
          Header: 'Data inscrição',
          defaultCanSort: true,
          maxWidth: '15ch',
          accessor: (subscription: Subscription) => {
            try {
              const [date] = subscription.createdAt.split('T')
              return format(new Date(`${date}`), 'dd/MM/yyyy')
            } catch (error) {
              return 'Sem data'
            }
          },
        },
      ] as unknown as Column<Subscription>[],
    [],
  )

  const handleFetchData = useCallback((args: FetchDataProps<Subscription>) => {
    setPage(args.pageIndex + 1)
    setOrderBy(args.orderBy || 'desc')
    setSortBy((args.sortBy || 'createdAt') as keyof SubscriptionsSortBy)
  }, [])

  if (!data?.data.length) return null

  return (
    <S.Container>
      <S.Title>Inscrições</S.Title>
      <Table<Subscription>
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
