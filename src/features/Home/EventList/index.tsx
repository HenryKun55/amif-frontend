/**
 *
 * EventList
 *
 */

import { useListEventsQuery } from '@/api/events'
import { Skeleton } from '@/components/Skeleton'
import * as S from './styles'

export const EventList = () => {
  const { data, isLoading } = useListEventsQuery({
    perPage: 5,
    active: true,
  })

  if (isLoading) {
    return (
      <S.Container>
        {Array.from({ length: 5 }).map((_, idx) => (
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
            event={{ ...event, startDate: event.startsAt, startHour: '10:30' }}
            onSubscribe={() => console.log('Subscribe')}
          />
        ))
      ) : (
        <div>Nenhum evento disponível</div>
      )}
    </S.Container>
  )
}
