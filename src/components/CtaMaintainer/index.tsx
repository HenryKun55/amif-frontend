import { Button } from '../Form/Button'
import * as S from './styles'

export const CtaMaintainer = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Seja um mantenedor</S.Title>
        <S.Description>
          Contribua conosco e nos faça ir mais longe.
        </S.Description>
      </S.Container>
      <S.Content>
        <Button size="md" variant="outlined">
          Clique aqui
        </Button>
      </S.Content>
    </S.Wrapper>
  )
}
