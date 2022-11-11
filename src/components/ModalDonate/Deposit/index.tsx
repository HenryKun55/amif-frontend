import Logo from '@/assets/mercado-pago.svg'

import * as S from './styles'

export const Deposit = () => {
  return (
    <S.Wrapper>
      <S.Logo src={Logo} />
      <S.Description>
        <b>Banco:</b> 323 - Mercado Pago
      </S.Description>
      <S.Description>
        <b>Agência:</b> 0001
      </S.Description>
      <S.Description>
        <b>Conta </b>corrente: 779178064-4
      </S.Description>
      <S.Description>
        <b>Nome:</b> Associação Missionária Ide e Fazei
      </S.Description>
      <S.Description>
        <b>CNPJ:</b> 37.687.462/0001-39
      </S.Description>
      <S.Versicle>
        “Buscai, pois, em primeiro lugar, o seu reino e a sua justiça, e todas
        estas coisas vos serão acrescentadas.” (Mateus 6:33)
      </S.Versicle>
    </S.Wrapper>
  )
}
