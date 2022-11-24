import { CtaMaintainer } from '@/components/CtaMaintainer'
import { AttendDonate } from '@/features/Donate/Attend'
import { DifferenceDonate } from '@/features/Donate/Difference'
import { HelpDonate } from '@/features/Donate/Help'
import { MainDonate } from '@/features/Donate/Main'

import * as S from './styles'

export const Donate = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <MainDonate />
        <AttendDonate />
        <DifferenceDonate />
        <HelpDonate />
        <CtaMaintainer />
      </S.Wrapper>
    </S.Container>
  )
}
