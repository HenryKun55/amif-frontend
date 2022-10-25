/**
 *
 * EventList
 *
 */

import { useListEventsQuery } from '@/api/events'
import { Skeleton } from '@/components/Skeleton'
import * as S from './styles'

const PER_PAGE = 3

export const EventList = () => {
  const { data, isLoading } = useListEventsQuery({
    perPage: PER_PAGE,
    active: true,
  })

  if (isLoading) {
    return (
      <S.Container>
        {Array.from({ length: PER_PAGE }).map((_, idx) => (
          <Skeleton key={idx} width={300} height={250} />
        ))}
      </S.Container>
    )
  }

  return (
    <S.Container>
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
    </S.Container>
  )
}
