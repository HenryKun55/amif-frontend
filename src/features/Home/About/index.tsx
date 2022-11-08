import { Positions } from '@/features/Home/About/Positions'

import ImageTwo from '../../../assets/donate-default.jpg'
import ImageOne from '../../../assets/help-4.jpg'
import * as S from './styles'
import { Versicle } from './Versicle'

export const About = () => {
  return (
    <S.Container>
      <S.ContentStaff>
        <S.Staff>
          … em qualquer lugar onde houver uma vida a ser alcançada pelo
          evangelho.
        </S.Staff>
      </S.ContentStaff>
      <S.Content>
        <S.Section>
          <S.Title>
            Quem <S.TitleSubEmphasis>Somos?</S.TitleSubEmphasis>
          </S.Title>
          <S.DescriptionContainer>
            <S.Description>
              A Associação Missionária Ide e Fazei é uma instituição cristã,
              tendo como objetivo principal promover a obra de evangelização e
              missões, atuando nas necessidades espirituais e sociais das
              comunidades tomadas como alvos. Dentre os objetivos da AMIF estão:
            </S.Description>
            <S.List>
              <S.ItemList>
                Promover o desenvolvimento da evangelização local e nacional,
                através de parcerias com Igrejas, Convenções, Ministérios,
                Juntas de Missões e Secretarias de Missões;
              </S.ItemList>
              <S.ItemList>
                Promover o desenvolvimento da obra missionária transcultural,
                através de parcerias com Igrejas, Convenções, Ministérios,
                Juntas de Missões e Secretarias de Missões;
              </S.ItemList>
              <S.ItemList>
                Promover Seminários, Simpósios, Encontros e Palestras sobre
                Missões;
              </S.ItemList>
            </S.List>
          </S.DescriptionContainer>
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
            <S.Title>Sobre o</S.Title>
            <S.TitleSubEmphasisBig>Projeto</S.TitleSubEmphasisBig>
            <S.Description top>
              A AMIF é a materialização de um sonho do Missionário Ronaldo
              Cabral que, junto com um grupo de servos de Deus, decidiram unir
              maiores esforços para poder fazer mais pela propagação do Reino de
              Deus na terra. São servos de Deus de diferentes denominações que,
              diante de novas e crescentes necessidades apresentadas pelo mundo
              atual, no que respeita à pregação do evangelho, ao discipulado
              cristão e à assistência social aos necessitados, viram ser
              necessários meios e ferramentas que permitam fazer mais e ir mais
              longe com a mensagem da redenção, tanto no Brasil como no
              exterior. Nesse propósito, nasceu a idéia de uma associação de
              evangelismo e missões, formalizando e viabilizando meios para sua
              execução de projetos missionários. A AMIF foi fundada em 19 de
              outubro de 2019, sendo um projeto de Deus para promover Sua glória
              e Seu Reino. A AMIF é uma ferramenta a serviço do povo de Deus
              para apoiar e realizar ações de promoção do evangelho do Senhor
              Jesus Cristo e de assistência as pessoas necessitadas. É a
              promoção do evangelho completo.
            </S.Description>
          </S.ContentAboutProject>
        </S.ContentRight>
      </S.ContentAbout>
      <Positions />
      <Versicle />
    </S.Container>
  )
}
