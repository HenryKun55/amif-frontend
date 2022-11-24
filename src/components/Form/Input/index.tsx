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
  useState,
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
    shape?: 'square' | 'pill'
    height?: 'sm' | 'md'
    leftIcon?: ReactNode
  }

export type InputAs<TFormValues extends FieldValues> = StyledComponent<
  InputFieldProps<TFormValues>
>

export const Input = <TFormValues extends FieldValues>({
  leftIcon,
  name,
  mask,
  label,
  shape,
  errors,
  height,
  register,
  className,
  required,
  ...props
}: InputFieldProps<TFormValues>) => {
  const [hasFocus, setHasFocus] = useState(false)

  const onChange: ChangeEventHandler<HTMLInputElement> = event => {
    if (mask) {
      event.target.value = mask(event.target.value)
    }
  }

  const onFocus = () => {
    setHasFocus(true)
  }

  const onBlur = () => {
    setHasFocus(false)
  }

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
      {label && (
        <S.Label htmlFor={name}>
          {label}
          {required && <sup>*</sup>}
        </S.Label>
      )}
      <S.InputWrapper focus={hasFocus} shape={shape} error={!!getMessage()}>
        {leftIcon && <S.LeftIcon>{leftIcon}</S.LeftIcon>}
        <S.Input
          height={height || 'md'}
          {...props}
          {...register(name, { onChange, onBlur })}
          onFocusCapture={onFocus}
        />
      </S.InputWrapper>
      {errors && <S.Error>{getMessage()}</S.Error>}
    </S.Wrapper>
  )
}
