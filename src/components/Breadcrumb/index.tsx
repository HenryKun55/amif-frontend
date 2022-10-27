import { MdAdd } from 'react-icons/md'
import * as S from './styles'

export type BreadcrumbProps = {
  path: string[]
  showButton?: boolean
  onButtonClick?: () => void
}

export const Breadcrumb = ({
  path,
  showButton,
  onButtonClick,
}: BreadcrumbProps) => {
  return (
    <S.Container>
      {path.map((p, idx) => (
        <S.Text key={idx}>/ {p} </S.Text>
      ))}
      {showButton && (
        <S.Button onClick={onButtonClick}>
          <MdAdd size={30} color="white" />
        </S.Button>
      )}
    </S.Container>
  )
}
