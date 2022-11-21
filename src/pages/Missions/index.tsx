import { MissionList } from '@/features/Missions/MisisonList'

import * as S from './styles'

export const Missions = () => {
  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <S.Title>Missões</S.Title>
          <S.Description>
            Então, Jesus aproximou-se deles e disse: {'"'}
            <i>
              Foi-me dada toda a autoridade nos céus e na terra. Portanto, vão e
              façam discípulos de todas as nações, batizando-os em nome do Pai e
              do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que
              eu ordenei a vocês. E eu estarei sempre com vocês, até o fim dos
              tempos
            </i>
            {'"'}.
            <br /> <strong>Mateus 28:18-20</strong>
          </S.Description>
        </S.TitleWrapper>
      </S.Header>
      <MissionList />
    </S.Container>
  )
}
