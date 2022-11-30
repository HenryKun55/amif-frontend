import { CtaMaintainer } from '@/components/CtaMaintainer'
import { AttendDonate } from '@/features/Donate/Attend'
import { DifferenceDonate } from '@/features/Donate/Difference'
import { HelpDonate } from '@/features/Donate/Help'
import { MainDonate } from '@/features/Donate/Main'

import * as S from './styles'

export const Donate = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <MainDonate />
        <AttendDonate />
        <DifferenceDonate />
        <HelpDonate />
        <CtaMaintainer />
      </S.Container>
    </S.Wrapper>
  )
}
