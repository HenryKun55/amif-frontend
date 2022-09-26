import { Form } from '@/features/Admin/SignIn/Form'
import * as S from './styles'

export const SignIn = () => {
  return (
    <S.Wrapper>
      <S.Title>AMIF</S.Title>
      <S.Content>
        <Form />
      </S.Content>
    </S.Wrapper>
  )
}
