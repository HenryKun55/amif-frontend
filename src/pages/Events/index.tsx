import { MainEventBanner } from '@/components/MainEventBanner'
import { EventList } from '@/features/Events/EventList'

import * as S from './styles'

export const Events = () => {
  return (
    <S.Container>
      <MainEventBanner />
      <EventList />
    </S.Container>
  )
}
