import { toast } from 'react-toastify'

import * as S from './styles'

export const Pix = () => {
  const key = 'amif.missoes@gmail.com'

  const handleCopyKey = () => {
    navigator.clipboard.writeText(key)
    toast.success('Chave copiada')
  }

  return (
    <S.Wrapper>
      <S.KeyPix>
        Chave: <strong>{key}</strong>
      </S.KeyPix>
      <S.Button size="sm" onClick={handleCopyKey}>
        Copiar chave
      </S.Button>
      <S.Message>Associação Missionária Ide e Fazei</S.Message>
    </S.Wrapper>
  )
}
