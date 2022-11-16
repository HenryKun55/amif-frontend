/**
 *
 * Navbar Mobile
 *
 */

import { useCallback, useRef } from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { useLocation } from 'react-router-dom'

import useOutsideAlerter from '@/hooks/useOutsideAlerter'

import { menuItems } from '..'
import * as S from './styles'

type MobileProps = {
  onClose: () => void
  isExpanded: boolean
}
export const Mobile = ({ onClose, isExpanded }: MobileProps) => {
  const location = useLocation()
  const containerRef = useRef<HTMLDivElement>(null)

  useOutsideAlerter(containerRef, () => {
    onClose()
  })

  const isActive = useCallback(
    (pattern: string) => location.pathname.split('/')[0] === pattern,
    [location],
  )

  return (
    <S.Container ref={containerRef} isExpanded={isExpanded}>
      <S.Content>
        <S.Back onClick={onClose}>
          <IoMdArrowRoundForward size={35} />
        </S.Back>
        {menuItems.map((item, key) => {
          return (
            <S.Link
              active={isActive(item.href)}
              to={item.href}
              key={key}
              onClick={onClose}
            >
              <S.Item>
                {item.icon}
                <span>{item.name}</span>
              </S.Item>
            </S.Link>
          )
        })}
      </S.Content>
    </S.Container>
  )
}
