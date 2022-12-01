import { Navigate, useParams } from 'react-router-dom'

import { useFetchAssociateQuery } from '@/api/associates'
import { Breadcrumb } from '@/components/Breadcrumb'
import { UpdateAssociate } from '@/features/Associate/Update'
import { AdminRoutes } from '@/routes/admin-routes'

import * as S from './styles'

export const AdminAssociatesId = () => {
  const params = useParams<{ id: string }>()
  const id = params.id || ''

  const { data: associate, isLoading } = useFetchAssociateQuery({ id })

  if (!isLoading && !associate) {
    return <Navigate to={AdminRoutes.NotFound} replace />
  }

  return (
    <S.Container>
      <Breadcrumb path={['Associates', associate?.name || 'Atualizar']} />
      {isLoading && <div>Carregando...</div>}
      <S.Wrapper>
        {associate && (
          <UpdateAssociate associate={associate} isLoading={isLoading} />
        )}
      </S.Wrapper>
    </S.Container>
  )
}
