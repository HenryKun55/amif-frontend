import qrcode from '@/assets/qr-pix.svg'

import * as S from './styles'

export const Pix = () => {
  return (
    <S.Wrapper>
      <S.KeyPix>Chave: amif.missoes@gmail.com</S.KeyPix>
      <S.QrCode src={qrcode} alt="amif.missoes@gmail.com" />
      <S.KeyPix>Associação Missionária Ide e Fazei</S.KeyPix>
    </S.Wrapper>
  )
}
