// eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 *
 * Radio
 *
 */

import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

import * as S from './styles'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode
  error?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ children, name, value, error, required, className, ...props }, ref) => {
    return (
      <S.Container className={className}>
        <S.Wrapper>
          <S.Label htmlFor={String(value)}>
            <S.Radio
              {...props}
              ref={ref}
              id={String(value)}
              name={name}
              error={!!error}
              type="radio"
            />
            {children}
            {required && <span>*</span>}
          </S.Label>
        </S.Wrapper>
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.Container>
    )
  },
)

Radio.displayName = 'Radio'
