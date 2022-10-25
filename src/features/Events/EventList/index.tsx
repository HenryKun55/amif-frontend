import { useListEventsQuery } from '@/api/events'
import { CardEvent } from '@/components/CardEvent'
import { Skeleton } from '@/components/Skeleton'
import { Pagination } from '@/components/Table/Pagination'
import { useState } from 'react'

import * as S from './styles'

const PER_PAGE = 12

export const EventList = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading } = useListEventsQuery({
    page,
    perPage: PER_PAGE,
    active: true,
  })

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
        onPageChange={setPage}
      />
    </S.Container>
  )
}
