/**
 *
 * Navbar
 *
 */

import * as S from './style'
import Logo from '@/assets/logo.svg'
import { Button } from '../Form/Button'
import { Routes } from '@/routes/routes'
import { useCallback } from 'react'
import { GiCrucifix, GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { BiDonateHeart } from 'react-icons/bi'
import { BsCalendarEvent } from 'react-icons/bs'
import { useModal } from '@/context/Modal'
import { useLocation } from 'react-router-dom'

export const menuItems = [
  { name: 'Início', href: Routes.Home, icon: <AiOutlineHome size={25} /> },
  { name: 'Eventos', href: Routes.Eventos, icon: <BsCalendarEvent /> },
  { name: 'Missões', href: Routes.Mission, icon: <GiCrucifix /> },
  {
    name: 'Torne-se um Mantenedor',
    href: Routes.Maintainer,
    icon: <BiDonateHeart />,
  },
]

type NavbarProps = {
  onOpenMobile: () => void
}
export const Navbar = ({ onOpenMobile }: NavbarProps) => {
  const { onOpen } = useModal()
  const location = useLocation()

  const isActive = useCallback(
    (pattern: string) => {
      if (pattern !== '/') {
        return location.pathname.includes(pattern)
      }
      return location.pathname === '/' && pattern === '/'
    },
    [location],
  )

  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo>
          <S.Image src={Logo} alt="logo amif" />
        </S.Logo>
        <S.Content>
          <S.Menu>
            {menuItems.map((item, key) => {
              return (
                <li key={key}>
                  <S.Link active={isActive(item.href)} to={item.href}>
                    {item.name}
                  </S.Link>
                </li>
              )
            })}
          </S.Menu>
        </S.Content>
        <S.Donate>
          <Button variant="outlined" shape="pill" onClick={() => onOpen()}>
            Doe
          </Button>
        </S.Donate>
        <S.Hamburger onClick={onOpenMobile}>
          <GiHamburgerMenu size={40} />
        </S.Hamburger>
      </S.Container>
    </S.Wrapper>
  )
}
