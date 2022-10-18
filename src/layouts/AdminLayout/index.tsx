import { useFetchProfileQuery } from '@/api/auth'
import { AdminNavBar } from '@/components/AdminNavBar'
import { SideBar } from '@/components/SideBar'
import { AdminRoutes } from '@/routes/admin-routes'
import { selectAuthIsAuthenticated } from '@/store/auth/selector'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import * as S from './styles'

export const AdminLayout = () => {
  const { isLoading } = useFetchProfileQuery()
  const isAuthenticated = useSelector(selectAuthIsAuthenticated)
  const location = useLocation()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to={AdminRoutes.Admin_SignIn}
        state={{ from: location.pathname }}
        replace
      />
    )
  }

  return (
    <S.Container>
      <AdminNavBar />
      <S.Main>
        <SideBar />
        <S.Content>
          <Outlet />
        </S.Content>
      </S.Main>
    </S.Container>
  )
}
