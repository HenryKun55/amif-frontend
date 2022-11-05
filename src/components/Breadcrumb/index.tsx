import { useMemo } from 'react'
import { MdAdd } from 'react-icons/md'

import * as S from './styles'

export type BreadcrumbProps = {
  path: string[]
  showButton?: boolean
  onButtonClick?: () => void
  buttonAsLink?: boolean
  href?: string
}

export const Breadcrumb = ({
  path,
  href,
  buttonAsLink,
  showButton,
  onButtonClick,
}: BreadcrumbProps) => {
  const ButtonComponent = useMemo(
    () => (buttonAsLink ? S.ButtonAsLink : S.Button),
    [buttonAsLink],
  )
  return (
    <S.Container>
      {path.map((p, idx) => (
        <S.Text key={idx}>/ {p} </S.Text>
      ))}
      {showButton && (
        <ButtonComponent to={href || ''} onClick={onButtonClick}>
          <MdAdd size={30} color="white" />
        </ButtonComponent>
      )}
    </S.Container>
  )
}
