import { Breadcrumb } from '@/components/Breadcrumb'
import { CreateEventForm } from '@/features/Admin/Events/Create/Form'

import * as S from './styles'

export const AdminEventsCreate = () => {
  return (
    <S.Container>
      <Breadcrumb path={['Eventos', 'Criar']} />
      <CreateEventForm />
    </S.Container>
  )
}
