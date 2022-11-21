import { useEffect, useRef, useState } from 'react'
import { BiDonateHeart } from 'react-icons/bi'
import { Outlet, useLocation } from 'react-router-dom'

import { Footer } from '@/components/Footer'
import { ModalDonate } from '@/components/ModalDonate'
import { ModalSubscribe } from '@/components/ModalSubscribe'
import { Navbar } from '@/components/Navbar'
import { Mobile } from '@/components/Navbar/Mobile'
import { useModal } from '@/context/Modal'

import * as S from './styles'

export const MainLayout = () => {
  const { onOpen } = useModal()
  const { pathname } = useLocation()
  const contentRef = useRef<HTMLDivElement>(null)
  const [isMenuExpand, setIsMenuExpand] = useState(false)
  const [tooltipVisible, setTooltipVisible] = useState(false)

  useEffect(() => {
    if (!contentRef.current) return
    contentRef.current.scrollTo(0, 0)
  }, [pathname])

  return (
    <S.Wrapper>
      <Navbar onOpenMobile={() => setIsMenuExpand(true)} />
      <Mobile
        onClose={() => setIsMenuExpand(false)}
        isExpanded={isMenuExpand}
      />
      <S.Content ref={contentRef}>
        <button onClick={() => onOpen('subscribe')}>open subscribe</button>
        <Outlet />
        <Footer />
      </S.Content>
      <S.Donate>
        <S.DonateButton
          size="lg"
          shape="pill"
          onMouseOver={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          onClick={() => onOpen('donate')}
        >
          <BiDonateHeart size={50} />
          <S.Tooltip visible={tooltipVisible}>
            <S.TooltipContent>Faça uma doação</S.TooltipContent>
          </S.Tooltip>
        </S.DonateButton>
      </S.Donate>
      <ModalDonate />
      <ModalSubscribe />
    </S.Wrapper>
  )
}
