/**
 *
 * AdminNavBar
 *
 */

import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { AdminRoutes } from '@/routes/admin-routes'
import { useAppDispatch } from '@/store'
import { logout } from '@/store/auth/slice'

import { Button } from '../Form/Button'
import * as S from './styles'

export const AdminNavBar = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleLogout = useCallback(() => {
    dispatch(logout())
    navigate(AdminRoutes.Admin_SignIn)
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
