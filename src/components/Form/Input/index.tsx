/**
 *
 * Input Component
 *
 */

import { InputHTMLAttributes } from 'react'
import { useController } from 'react-hook-form'

import * as S from './styles'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  control: any
  error?: string
  label?: string
  defaultValue?: string
  containerClassName?: string
}

export const Input = ({
  name,
  control,
  error,
  label,
  defaultValue = '',
  containerClassName,
  ...props
}: InputProps) => {
  const { field } = useController({ name, defaultValue, control })

  return (
    <S.Wrapper className={containerClassName}>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Input
        value={field.value}
        onChange={field.onChange}
        name={name}
        {...props}
      />
      {error && <span>{error}</span>}
    </S.Wrapper>
  )
}
