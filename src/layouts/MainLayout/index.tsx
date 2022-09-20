import { Outlet } from 'react-router-dom'
import * as S from './styles'

export const MainLayout = () => {
  return (
    <S.Container>
      <h1>Hello layoutr</h1>
      <Outlet />
    </S.Container>
  )
}
