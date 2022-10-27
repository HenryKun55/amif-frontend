import CountUp from 'react-countup'
import { FaChild } from 'react-icons/fa'
import { GiHeavyArrow } from 'react-icons/gi'
import { MdFamilyRestroom, MdVolunteerActivism } from 'react-icons/md'
import * as S from './styles'

export const AttendDonate = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <FaChild size={40} />
          <S.Title>
            <CountUp start={0} end={50} duration={2} prefix="+" />
            mil
          </S.Title>
          <S.Description>crianças</S.Description>
        </S.Content>
        <S.Content>
          <MdFamilyRestroom size={40} />
          <S.Title>
            <CountUp start={0} end={300} duration={2} prefix="+" />
          </S.Title>
          <S.Description>famílias</S.Description>
        </S.Content>
        <S.Content>
          <GiHeavyArrow size={40} />
          <S.Title>
            <CountUp start={0} end={70} duration={2} prefix="+" />
          </S.Title>
          <S.Description>missionários</S.Description>
        </S.Content>
        <S.Content>
          <MdVolunteerActivism size={40} />
          <S.Title>
            <CountUp start={0} end={100} duration={2} prefix="+" />
          </S.Title>
          <S.Description>voluntários</S.Description>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}
