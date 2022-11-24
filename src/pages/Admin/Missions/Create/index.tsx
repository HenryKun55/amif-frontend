import { Breadcrumb } from '@/components/Breadcrumb'
import { CreateMissionForm } from '@/features/Admin/Missions/Create/Form'

import * as S from './styles'

export const AdminMissionsCreate = () => {
  return (
    <S.Container>
      <Breadcrumb path={['Missões', 'Criar']} />
      <CreateMissionForm />
    </S.Container>
  )
}
