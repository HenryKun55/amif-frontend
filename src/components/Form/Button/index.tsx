import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outlined'
  fullWidth?: boolean
}

export const Button = ({ ...props }: ButtonProps) => {
  return <S.Button {...props} />
}
