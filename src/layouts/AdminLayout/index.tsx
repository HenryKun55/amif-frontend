import { AdminNavBar } from '@/components/AdminNavBar'
import { SideBar } from '@/components/SideBar'
import { Outlet } from 'react-router-dom'
import * as S from './styles'

export const AdminLayout = () => {
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
