/**
 *
 * EventList
 *
 */

import { useListEventsQuery } from '@/api/events'
import { Skeleton } from '@/components/Skeleton'

import * as S from './styles'

const PER_PAGE = 4

export const EventList = () => {
  const { data, isLoading } = useListEventsQuery({
    perPage: PER_PAGE,
    active: true,
    orderBy: 'asc',
    sortBy: 'startDate',
  })

  if (isLoading) {
    return (
      <S.CardList>
        {Array.from({ length: PER_PAGE }).map((_, idx) => (
          <Skeleton key={idx} width={300} height={250} />
        ))}
      </S.CardList>
    )
  }

  return (
    <S.Container>
      <S.Title>Eventos em destaque</S.Title>
      <S.CardList>
        {data?.data && data.data.length > 0 ? (
          data.data.map(event => (
            <S.CardEvent
              key={event.id}
              event={event}
              onSubscribe={() => console.log('Subscribe')}
            />
          ))
        ) : (
          <div>Nenhum evento disponível</div>
        )}
      </S.CardList>
    </S.Container>
  )
}
