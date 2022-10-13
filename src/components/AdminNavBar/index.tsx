import { AdminRoutes } from '@/routes/admin-routes'
import { Button } from '../Form/Button'
import * as S from './styles'

export const AdminNavBar = () => {
  return (
    <S.Container>
      <S.Logo to={AdminRoutes.Admin_Home}>Logo</S.Logo>
      <Button variant="outlined">Sair</Button>
    </S.Container>
  )
}
