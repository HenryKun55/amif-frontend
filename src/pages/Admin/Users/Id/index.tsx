import { Navigate, useParams } from 'react-router-dom'

import { useFetchUserQuery } from '@/api/users'
import { Breadcrumb } from '@/components/Breadcrumb'
import { UpdateUserForm } from '@/features/Admin/SignIn/Update/Form'
import { AdminRoutes } from '@/routes/admin-routes'

import * as S from './styles'

export const AdminUsersId = () => {
  const params = useParams<{ id: string }>()
  const id = params.id || ''

  const { data: user, isLoading } = useFetchUserQuery({ id })

  if (!isLoading && !user) {
    return <Navigate to={AdminRoutes.NotFound} replace />
  }

  return (
    <S.Container>
      <Breadcrumb path={['Usuários', user?.username || 'Atualizar']} />
      {isLoading && <div>Carregando...</div>}
      {user && <UpdateUserForm user={user} />}
    </S.Container>
  )
}
