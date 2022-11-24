// eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 *
 * Radio
 *
 */

import { InputHTMLAttributes, ReactNode } from 'react'
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form'

import * as S from './styles'

export interface RadioProps<TFormValues extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<TFormValues>
  register: UseFormRegister<TFormValues>
  children?: ReactNode
  errors?: DeepMap<FieldValues, FieldError>
}

export const Radio = <TFormValues extends FieldValues>({
  children,
  name,
  value,
  errors,
  required,
  className,
  register,
  ...props
}: RadioProps<TFormValues>) => {
  const getMessage = () => {
    if (!errors) return
    const names = name.split('.')
    return names.reduce((acc, curr) => {
      if (!acc) return acc
      return acc[curr]
    }, errors)?.message
  }
  const errorMessage = getMessage()

  return (
    <S.Container className={className}>
      <S.Wrapper>
        <S.Label htmlFor={String(value)}>
          <S.Radio
            {...props}
            {...register(name)}
            value={value}
            id={String(value)}
            error={!!errorMessage}
            type="radio"
          />
          {children}
          {required && <span>*</span>}
        </S.Label>
      </S.Wrapper>
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  )
}

Radio.displayName = 'Radio'
