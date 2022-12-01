import { CtaMaintainer } from '@/components/CtaMaintainer'
import { MainEventBanner } from '@/components/MainEventBanner'
import { About } from '@/features/Home/About'
import { EventList } from '@/features/Home/EventList'

import * as S from './styles'

export const Home = () => {
  return (
    <S.Wrapper>
      <MainEventBanner />
      <EventList />
      <About />
      <S.Container>
        <CtaMaintainer />
      </S.Container>
    </S.Wrapper>
  )
}
