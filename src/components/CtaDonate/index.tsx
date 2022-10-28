import { useModal } from '@/context/Modal'
import { Button } from '../Form/Button'
import * as S from './styles'

export const CtaDonate = () => {
  const { onOpen } = useModal()
  return (
    <S.Wrapper onClick={() => onOpen()}>
      <S.Container>
        <S.Title>Faça uma doação</S.Title>
        <S.Description>Sua doação é muito importante para nós.</S.Description>
      </S.Container>
      <S.Content>
        <Button size="md">Doe</Button>
      </S.Content>
    </S.Wrapper>
  )
}
