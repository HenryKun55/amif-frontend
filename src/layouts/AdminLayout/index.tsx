import { Outlet } from 'react-router-dom'
import * as S from './styles'

export const AdminLayout = () => {
  return (
    <S.Wrapper>
      <h1>Admin layout</h1>
      <Outlet />
    </S.Wrapper>
  )
}
