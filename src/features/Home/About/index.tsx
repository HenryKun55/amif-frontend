import * as S from './styles'
import ImageOne from '../../../assets/help-4.jpg'
import ImageTwo from '../../../assets/donate-default.jpg'

export const About = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Section>
          <S.Title>
            Quem <S.TitleSubEmphasis>Somos?</S.TitleSubEmphasis>
          </S.Title>
          <S.Description>
            Ao contrário da crença popular, o Lorem Ipsum não é simplesmente
            texto aleatório. Tem raízes numa peça de literatura clássica em
            Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard
            McClintock, um professor de Latim no Colégio Hampden-Sydney, na
            Virgínia, procurou uma das palavras em Latim mais obscuras
            (consectetur) numa passagem Lorem Ipsum, e atravessando as cidades
            do mundo na literatura clássica, descobriu a sua origem. Lorem Ipsum
            vem das secções 1.10.32 e 1.10.33 do de Finibus Bonorum et Malorum
            (Os Extremos do Bem e do Mal), por Cícero, escrito a 45AC. Este
            livro é um tratado na teoria da ética, muito popular durante a
            Renascença. A primeira linha de Lorem Ipsum, Lorem ipsum dolor sit
            amet... aparece de uma linha na secção 1.10.32.
          </S.Description>
        </S.Section>
        <S.ImageContainer>
          <S.Image src={ImageOne} />
          <S.BgImage />
        </S.ImageContainer>
      </S.Content>
      <S.ContentAbout>
        <S.BgSquare />
        <S.ImageTwo src={ImageTwo} />
        <S.ContentRight>
          <S.ContentAboutProject>
            <S.Title>
              Sobre o <S.TitleSubEmphasis>Projeto</S.TitleSubEmphasis>
            </S.Title>
            <S.Description>
              Ao contrário da crença popular, o Lorem Ipsum não é simplesmente
              texto aleatório. Tem raízes numa peça de literatura clássica em
              Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard
              McClintock, um professor de Latim no Colégio Hampden-Sydney, na
              Virgínia, procurou uma das palavras em Latim mais obscuras
              (consectetur) numa passagem Lorem Ipsum, e atravessando as cidades
              do mundo na literatura clássica, descobriu a sua origem. Lorem
              Ipsum vem das secções 1.10.32 e 1.10.33 do de Finibus Bonorum et
              Malorum (Os Extremos do Bem e do Mal), por Cícero, escrito a 45AC.
            </S.Description>
          </S.ContentAboutProject>
        </S.ContentRight>
      </S.ContentAbout>
    </S.Container>
  )
}
