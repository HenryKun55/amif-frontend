import { AdminRoutes } from '@/routes/admin-routes'
import { useAppDispatch } from '@/store'
import { logout } from '@/store/auth/slice'
import { useCallback } from 'react'
import { Button } from '../Form/Button'
import * as S from './styles'

export const AdminNavBar = () => {
  const dispatch = useAppDispatch()

  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [])

  return (
    <S.Container>
      <S.Logo to={AdminRoutes.Admin_Home}>Logo</S.Logo>
      <Button variant="outlined" onClick={handleLogout}>
        Sair
      </Button>
    </S.Container>
  )
}
