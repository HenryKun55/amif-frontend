import CountUp from 'react-countup'
import { FaChild } from 'react-icons/fa'
import { GiHeavyArrow } from 'react-icons/gi'
import VisibilitySensor from 'react-visibility-sensor'
import { MdFamilyRestroom, MdVolunteerActivism } from 'react-icons/md'
import * as S from './styles'

export const AttendDonate = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <FaChild size={40} />
          <S.Title>
            <CountUp redraw end={50} duration={1.3} prefix="+">
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            mil
          </S.Title>
          <S.Description>crianças</S.Description>
        </S.Content>
        <S.Content>
          <MdFamilyRestroom size={40} />
          <S.Title>
            <CountUp redraw end={300} duration={1.3} prefix="+">
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </S.Title>
          <S.Description>famílias</S.Description>
        </S.Content>
        <S.Content>
          <GiHeavyArrow size={40} />
          <S.Title>
            <CountUp redraw end={70} duration={1.3} prefix="+">
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </S.Title>
          <S.Description>missionários</S.Description>
        </S.Content>
        <S.Content>
          <MdVolunteerActivism size={40} />
          <S.Title>
            <CountUp end={100} duration={1.3} prefix="+">
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </S.Title>
          <S.Description>voluntários</S.Description>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}
