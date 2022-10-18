import { Form } from '@/features/Admin/SignIn/Form'
import * as S from './styles'

export const SignIn = () => {
  return (
    <S.Container>
      <S.FormContainer>
        <Form />
      </S.FormContainer>
      <S.Box>
        <S.LogoFake />
      </S.Box>
    </S.Container>
  )
}
