import * as S from './styles'
import logo from 'assets/logo.svg'
import { Routes } from '@/routes/routes'

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <S.Logo src={logo} />
          <S.Title>Descrição da empresa</S.Title>
          <S.Social>
            <S.SocialLink
              href="https://www.instagram.com/amifoficial/"
              target="_blank"
              rel="noreferrer"
            >
              <S.FacebookIcon />
            </S.SocialLink>
            <S.SocialLink
              href="https://www.instagram.com/amifoficial/"
              target="_blank"
              rel="noreferrer"
            >
              <S.InstagramIcon />
            </S.SocialLink>
          </S.Social>
        </S.Content>
        <S.Navigation>
          <S.NavigationLink to={Routes.Mission}>
            <S.NavigationText>Missões</S.NavigationText>
          </S.NavigationLink>
          <S.NavigationLink to={Routes.Eventos}>
            <S.NavigationText>Eventos</S.NavigationText>
          </S.NavigationLink>
          <S.NavigationLink to={Routes.Associate}>
            <S.NavigationText>Torne-se um Associado</S.NavigationText>
          </S.NavigationLink>
          <S.NavigationLink to={Routes.Donate}>
            <S.NavigationText>Doe</S.NavigationText>
          </S.NavigationLink>
        </S.Navigation>
      </S.Container>
      <S.Description>
        CNPJ: 174192828482149/0001-01 - Rua aqui, Bairro, Numero, Complemento -
        Caruaru PE
      </S.Description>
      <S.Description>Copyright© 2022</S.Description>
    </S.Wrapper>
  )
}
