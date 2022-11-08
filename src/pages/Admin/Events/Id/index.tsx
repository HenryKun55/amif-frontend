import { Navigate, useParams } from 'react-router-dom'

import { useFetchEventQuery } from '@/api/events'
import { Breadcrumb } from '@/components/Breadcrumb'
import { UpdateEventForm } from '@/features/Admin/Events/Update/Form'
import { AdminRoutes } from '@/routes/admin-routes'

import * as S from './styles'

export const AdminEventsId = () => {
  const params = useParams<{ id: string }>()
  const id = params.id || ''
  const { data: event, isLoading } = useFetchEventQuery({ id })

  if (!isLoading && !event) {
    return <Navigate to={AdminRoutes.NotFound} replace />
  }

  return (
    <S.Container>
      <Breadcrumb path={['Eventos', event?.title || 'Atualizar']} />
      {isLoading && <div>Carregando...</div>}
      {event && <UpdateEventForm event={event} />}
    </S.Container>
  )
}
