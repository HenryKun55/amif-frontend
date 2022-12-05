import logo from 'assets/logo.svg'

import { Form } from '@/features/Admin/SignIn/Form'

import * as S from './styles'

export const SignIn = () => {
  return (
    <S.Container>
      <S.FormContainer>
        <Form />
      </S.FormContainer>
      <S.Box>
        <S.Logo src={logo} />
      </S.Box>
    </S.Container>
  )
}
