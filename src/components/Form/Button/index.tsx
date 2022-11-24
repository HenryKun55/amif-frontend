/**
 *
 * Button
 *
 */

import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  shape?: 'square' | 'pill'
}

export const Button = ({ type = 'button', ...props }: ButtonProps) => {
  return <S.Button type={type} {...props} />
}
