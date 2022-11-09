import help5 from 'assets/help-5.jpg'
import { FaChurch, FaHandsHelping } from 'react-icons/fa'
import { GiLovers } from 'react-icons/gi'
import { RiHomeHeartFill } from 'react-icons/ri'

import * as S from './styles'

export const HelpDonate = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          Ajude as<S.TitleEmphasis> pessoas</S.TitleEmphasis>
        </S.Title>
        <S.Title>
          através<S.TitleEmphasis isBeige> de nós</S.TitleEmphasis>
        </S.Title>
        <S.Description>
          Continuaremos a avançar na Africa, e no interior de Pernambuco, da
          Mata ao Sertão, apoiando igrejas em sua missão de evangelizar a
          quantos ainda não tenham sido alcançados pela boa nova da salvação em
          Cristo Jesus.
          <br />À medida que o universo de associados cresça e, com ele, os
          recursos e a mão de obra disponível, poderemos avançar mais na
          promoção do Reino de Deus. Para isso, contamos com sua contínua oração
          a nosso favor. Também convidamos a todos os servos de Deus que sentem
          ardor evangelístico e missionário a se associar conosco, dando-nos as
          mãos nesta gloriosa missão.
        </S.Description>
        <S.Causes>
          <S.Cause>
            <S.AreaIcon isRed>
              <RiHomeHeartFill color="red" size={24} />
            </S.AreaIcon>
            <S.CauseText isRed>Amor</S.CauseText>
          </S.Cause>
          <S.Cause>
            <S.AreaIcon isGreen>
              <GiLovers color="green" size={24} />
            </S.AreaIcon>
            <S.CauseText isGreen>Esperança</S.CauseText>
          </S.Cause>
          <S.Cause>
            <S.AreaIcon isBrown>
              <FaHandsHelping color="brown" size={24} />
            </S.AreaIcon>
            <S.CauseText isBrown>Compaixão</S.CauseText>
          </S.Cause>
          <S.Cause>
            <S.AreaIcon>
              <FaChurch color="blue" size={24} />
            </S.AreaIcon>
            <S.CauseText>Cristo</S.CauseText>
          </S.Cause>
        </S.Causes>
      </S.Container>
      <S.Image src={help5} />
    </S.Wrapper>
  )
}
