import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Mobile } from '@/components/Navbar/Mobile'
import { ModalDonate } from '@/components/ModalDonate'
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
      <S.Content>
        <Outlet />
      </S.Content>
      <Footer />
      <ModalDonate />
    </S.Wrapper>
  )
}
