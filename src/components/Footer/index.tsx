import logo from 'assets/logo.svg'

import { Routes } from '@/routes/routes'

import * as S from './styles'

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <S.Logo src={logo} />
          <S.Title>ASSOCIAÇÃO MISSIONÁRIA IDE E FAZEI</S.Title>
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
          <S.NavigationLink to={Routes.Missoes}>
            <S.NavigationText>Missões</S.NavigationText>
          </S.NavigationLink>
          <S.NavigationLink to={Routes.Eventos}>
            <S.NavigationText>Eventos</S.NavigationText>
          </S.NavigationLink>
          <S.NavigationLink to={Routes.Associados}>
            <S.NavigationText>Torne-se um Associado</S.NavigationText>
          </S.NavigationLink>
          <S.NavigationLink to={Routes.Doe}>
            <S.NavigationText>Doe</S.NavigationText>
          </S.NavigationLink>
        </S.Navigation>
      </S.Container>
      <S.Description>
        CNPJ: 37.687.462/0001-39 - Rua Ariano Suassuna, Boa Vista, 160,
        Pavimento Térreo - Caruaru PE
      </S.Description>
      <S.Description>Copyright© 2022</S.Description>
    </S.Wrapper>
  )
}
