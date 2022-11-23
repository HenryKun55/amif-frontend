import { Breadcrumb } from '@/components/Breadcrumb'
import { CreateMaintainerForm } from '@/components/CreateMaintainerForm'

import * as S from './styles'

export const AdminMaintainersCreate = () => {
  return (
    <S.Container>
      <Breadcrumb path={['Mantenedores', 'Criar']} />
      <CreateMaintainerForm />
    </S.Container>
  )
}
