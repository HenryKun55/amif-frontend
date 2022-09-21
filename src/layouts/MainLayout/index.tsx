import { Navigation } from '@/components/Navigation'
import { Outlet } from 'react-router-dom'
import * as S from './styles'

export const MainLayout = () => {
  return (
    <S.Container>
      <Navigation />
      <Outlet />
    </S.Container>
  )
}
