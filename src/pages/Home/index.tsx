import { MainEvent } from '@/components/MainEvent'
import { EventList } from '@/features/Home/EventList'
import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <MainEvent />
      <EventList />
    </S.Container>
  )
}
