import { Breadcrumb } from '@/components/Breadcrumb'
import { CreateAssociateForm } from '@/features/Associate/Create'

import * as S from './styles'

export const AdminAssociatesCreate = () => {
  return (
    <S.Container>
      <Breadcrumb path={['Associados', 'Cadastro']} />
      <S.Wrapper>
        <CreateAssociateForm mode="admin" />
      </S.Wrapper>
    </S.Container>
  )
}
