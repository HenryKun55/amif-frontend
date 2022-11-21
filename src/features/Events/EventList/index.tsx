import { useListEventsQuery } from '@/api/events'
import { CardEvent } from '@/components/CardEvent'
import { Skeleton } from '@/components/Skeleton'
import { Pagination } from '@/components/Table/Pagination'
import { usePagePagination } from '@/hooks/usePagePagination'
import { Routes } from '@/routes/routes'

import * as S from './styles'

const PER_PAGE = 12

export const EventList = () => {
  const { page, setPage } = usePagePagination({
    title: 'Eventos',
    route: Routes.Eventos,
  })
  const { data, isLoading } = useListEventsQuery({
    page,
    perPage: PER_PAGE,
    active: true,
    orderBy: 'asc',
    sortBy: 'startDate',
  })

  const handlePageChange = (pageIndex: number) => {
    if (!data) return
    if (pageIndex > 0 && pageIndex <= data.totalPages) {
      setPage(pageIndex)
    }
  }

  if (isLoading) {
    return (
      <S.EventList>
        {Array.from({ length: PER_PAGE }).map((_, idx) => (
          <Skeleton key={idx} width={300} height={250} />
        ))}
      </S.EventList>
    )
  }

  if (!data?.data || data.data.length === 0) {
    return <div>Nenhum evento encontrado</div>
  }

  return (
    <S.Container>
      <S.EventList>
        {data.data.map(event => (
          <CardEvent
            key={event.id}
            event={event}
            onSubscribe={() => console.log('Subscribe')}
          />
        ))}
      </S.EventList>
      <Pagination
        siblingCount={1}
        currentPage={page}
        totalCount={data?.total || 0}
        pageSize={PER_PAGE}
        next="Próximo"
        previous="Anterior"
        onPageChange={handlePageChange}
      />
    </S.Container>
  )
}
