import { Navigate, useParams } from 'react-router-dom'

import { useFetchMissionQuery } from '@/api/missions'
import { Breadcrumb } from '@/components/Breadcrumb'
import { UpdateMissionForm } from '@/features/Admin/Missions/Update/Form'
import { AdminRoutes } from '@/routes/admin-routes'

import * as S from './styles'

export const AdminMissionsId = () => {
  const params = useParams<{ id: string }>()
  const id = params.id || ''

  const { data: mission, isLoading } = useFetchMissionQuery({ id })

  if (!isLoading && !mission) {
    return <Navigate to={AdminRoutes.NotFound} replace />
  }

  return (
    <S.Container>
      <Breadcrumb path={['Missões', mission?.title || 'Atualizar']} />
      {isLoading && <div>Carregando...</div>}
      {mission && <UpdateMissionForm mission={mission} />}
    </S.Container>
  )
}
