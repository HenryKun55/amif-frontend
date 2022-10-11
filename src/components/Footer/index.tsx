import * as S from './styles'
import logo from 'assets/logo.svg'

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <S.Logo src={logo} />
          <S.Title>Descrição da empresa</S.Title>
          <S.Social>
            <S.SocialLink
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <S.FacebookIcon />
            </S.SocialLink>
            <S.SocialLink
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <S.InstagramIcon />
            </S.SocialLink>
          </S.Social>
        </S.Content>
        <S.Navigation>
          <S.NavigationText>Missões</S.NavigationText>
          <S.NavigationText>Eventos</S.NavigationText>
          <S.NavigationText>Torne-se um associado</S.NavigationText>
          <S.NavigationText>Doe</S.NavigationText>
        </S.Navigation>
      </S.Container>
      <S.Description>
        Copyright© 2022 - CNPJ: 174192828482149/0001-01 - Rua aqui, Bairro,
        Numero, Complemento - Caruaru PE
      </S.Description>
    </S.Wrapper>
  )
}
