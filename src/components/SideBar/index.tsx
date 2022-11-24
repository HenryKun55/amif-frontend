/**
 *
 * SideBar
 *
 */

import { useCallback } from 'react'
import { GiCrucifix } from 'react-icons/gi'
import {
  MdBookmark,
  MdManageAccounts,
  MdOutlineAccountTree,
  MdSupervisorAccount,
} from 'react-icons/md'
import { useLocation } from 'react-router-dom'

import { useResize } from '@/hooks/useResize'
import { AdminRoutes } from '@/routes/admin-routes'

import * as S from './styles'

export const SideBar = () => {
  const location = useLocation()
  const { width, handleMouseDown } = useResize({
    initialWidth: 250,
    minWidth: 160,
    maxWidth: 700,
  })

  const isActive = useCallback(
    (pattern: string) => location.pathname.includes(pattern),
    [location],
  )

  return (
    <S.Container width={width}>
      <S.List>
        <S.ListItem>
          <S.Link
            active={isActive(AdminRoutes.Admin_Eventos)}
            to={AdminRoutes.Admin_Eventos}
          >
            <MdBookmark size={20} />
            Eventos
          </S.Link>
        </S.ListItem>
        <S.ListItem>
          <S.Link
            active={isActive(AdminRoutes.Admin_Missoes)}
            to={AdminRoutes.Admin_Missoes}
          >
            <GiCrucifix size={20} />
            Missões
          </S.Link>
        </S.ListItem>
        <S.ListItem>
          <S.Link
            active={isActive(AdminRoutes.Admin_Associados)}
            to={AdminRoutes.Admin_Associados}
          >
            <MdOutlineAccountTree size={20} />
            Associados
          </S.Link>
        </S.ListItem>
        <S.ListItem>
          <S.Link
            active={isActive(AdminRoutes.Admin_Mantenedores)}
            to={AdminRoutes.Admin_Mantenedores}
          >
            <MdSupervisorAccount size={20} />
            Matenedores
          </S.Link>
        </S.ListItem>
        <S.ListItem>
          <S.Link
            active={isActive(AdminRoutes.Admin_Acessos)}
            to={AdminRoutes.Admin_Acessos}
          >
            <MdManageAccounts size={20} />
            Acessos
          </S.Link>
        </S.ListItem>
      </S.List>
      <S.Version>AMIF - v0.0.1</S.Version>
      <S.ResizeStick onMouseDown={handleMouseDown} />
    </S.Container>
  )
}
