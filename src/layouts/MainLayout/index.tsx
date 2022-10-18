import { Navbar } from '@/components/Navbar'
import { Mobile } from '@/components/Navbar/Mobile'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import * as S from './styles'

export const MainLayout = () => {
  const [isMenuExpand, setIsMenuExpand] = useState(false)

  return (
    <S.Wrapper>
      <Navbar onOpenMobile={() => setIsMenuExpand(true)} />
      <Mobile
        onClose={() => setIsMenuExpand(false)}
        isExpanded={isMenuExpand}
      />
      <Outlet />
    </S.Wrapper>
  )
}
