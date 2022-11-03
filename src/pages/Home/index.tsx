import { MainEventBanner } from '@/components/MainEventBanner'
import { About } from '@/features/Home/About'
import { EventList } from '@/features/Home/EventList'

import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      {/* <MainEvent /> */}
      <MainEventBanner />
      <EventList />
      <About />
    </S.Container>
  )
}
