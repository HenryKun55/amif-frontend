import { Breadcrumb } from '@/components/Breadcrumb'
import { FormAssociateCreate } from '@/features/Associate/Create'

import * as S from './styles'

export const AdminAssociatesCreate = () => {
  return (
    <S.Container>
      <Breadcrumb path={['Associates', 'Cadastro']} />
      <S.Wrapper>
        <FormAssociateCreate />
      </S.Wrapper>
    </S.Container>
  )
}
