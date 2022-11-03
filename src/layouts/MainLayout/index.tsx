import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Mobile } from '@/components/Navbar/Mobile'
import { ModalDonate } from '@/components/ModalDonate'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import * as S from './styles'
import { BiDonateHeart } from 'react-icons/bi'
import { useModal } from '@/context/Modal'

export const MainLayout = () => {
  const { onOpen } = useModal()
  const [isMenuExpand, setIsMenuExpand] = useState(false)
  const [tooltipVisible, setTooltipVisible] = useState(false)

  return (
    <S.Wrapper>
      <Navbar onOpenMobile={() => setIsMenuExpand(true)} />
      <Mobile
        onClose={() => setIsMenuExpand(false)}
        isExpanded={isMenuExpand}
      />
      <S.Content>
        <Outlet />
        <Footer />
      </S.Content>
      <ModalDonate />
      <S.Donate>
        <S.DonateButton
          size="lg"
          shape="pill"
          onMouseOver={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          onClick={onOpen}
        >
          <BiDonateHeart size={50} />
          <S.Tooltip visible={tooltipVisible}>
            <S.TooltipContent>Faça uma doação</S.TooltipContent>
          </S.Tooltip>
        </S.DonateButton>
      </S.Donate>
    </S.Wrapper>
  )
}
