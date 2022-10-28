import { CtaMaintainer } from '@/components/CtaMaintainer'
import { MainDonate } from '@/features/Donate/Main'
import { AttendDonate } from '@/features/Donate/Attend'
import { DifferenceDonate } from '@/features/Donate/Difference'

import * as S from './styles'
import { HelpDonate } from '@/features/Donate/Help'

export const Donate = () => {
  return (
    <S.Wrapper>
      <MainDonate />
      <AttendDonate />
      <DifferenceDonate />
      <HelpDonate />
      <CtaMaintainer />
    </S.Wrapper>
  )
}
