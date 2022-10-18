/**
 *
 * Input Component
 *
 */

import { StyledComponent } from '@emotion/styled'
import {
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactNode,
  useMemo,
} from 'react'
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form'

import * as S from './styles'

export type InputFieldProps<TFormValues extends FieldValues> =
  InputHTMLAttributes<HTMLInputElement> & {
    name: Path<TFormValues>
    register: UseFormRegister<TFormValues>
    errors?: DeepMap<FieldValues, FieldError>
    label?: ReactNode
    mask?: (value: string) => string
  }

export type InputAs<TFormValues extends FieldValues> = StyledComponent<
  InputFieldProps<TFormValues>
>

export const Input = <TFormValues extends FieldValues>({
  name,
  errors,
  label,
  mask,
  register,
  className,
  ...props
}: InputFieldProps<TFormValues>) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = event => {
    if (mask) {
      event.target.value = mask(event.target.value)
    }
  }

  const hasError = useMemo(
    () => typeof errors === 'object' && Object.keys(errors).length > 0,
    [errors],
  )

  const getMessage = () => {
    if (!errors) return
    const names = name.split('.')
    return names.reduce((acc, curr) => {
      if (!acc) return acc
      return acc[curr]
    }, errors)?.message
  }

  return (
    <S.Wrapper className={className}>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Input error={hasError} {...props} {...register(name, { onChange })} />
      {errors && <S.Error>{getMessage()}</S.Error>}
    </S.Wrapper>
  )
}
