// eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 *
 * Checkbox
 *
 */

import {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
} from 'react'

import * as S from './styles'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode
  error?: string
  indeterminate?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { children, name, error, required, indeterminate, className, ...props },
    ref,
  ) => {
    const defaultRef = useRef<HTMLInputElement | null>(null)
    const resolvedRef: any = ref || defaultRef

    useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate
      }
    }, [resolvedRef, indeterminate])

    return (
      <S.Container className={className}>
        <S.Wrapper>
          <S.Checkbox
            ref={resolvedRef}
            id={name}
            name={name}
            error={!!error}
            {...props}
            type="checkbox"
          />
          <S.Label htmlFor={name}>
            {children}
            {required && <span>*</span>}
          </S.Label>
        </S.Wrapper>
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.Container>
    )
  },
)

Checkbox.displayName = 'Checkbox'
