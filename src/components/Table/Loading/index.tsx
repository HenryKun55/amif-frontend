/**
 *
 * Table Loading
 *
 */

import * as S from './styles'

export type LoadingProps = {
  columns: number
}

export const Loading = ({ columns }: LoadingProps) => {
  return (
    <S.Container>
      <S.Row>
        {Array.from({ length: columns }).map((_, idx) => (
          <S.Column key={idx} height={40} />
        ))}
      </S.Row>

      <S.CellContainer>
        {Array.from({ length: 14 }).map((_, idx) => (
          <S.Cell key={idx} height={35} />
        ))}
      </S.CellContainer>
    </S.Container>
  )
}
