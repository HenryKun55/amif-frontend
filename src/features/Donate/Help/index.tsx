import { Button } from '@/components/Form/Button'
import { useModal } from '@/context/Modal'
import help5 from 'assets/help-5.jpg'
import { RiHomeHeartFill } from 'react-icons/ri'
import { GiLovers } from 'react-icons/gi'
import { FaHandsHelping, FaChurch } from 'react-icons/fa'

import * as S from './styles'

export const HelpDonate = () => {
  const { onOpen } = useModal()
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          Ajude as<S.TitleEmphasis> pessoas</S.TitleEmphasis>
        </S.Title>
        <S.Title>
          através de<S.TitleEmphasis isBeige> nós</S.TitleEmphasis>
        </S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit
          mauris bibendum, tincidunt mauris a, pretium nunc. Curabitur quam
          neque, egestas at maximus fringilla, rhoncus non neque. Curabitur quam
          neque, egestas at maximus fringilla, rhoncus non neque.
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
        {/* <S.ButtonContainer> */}
        <Button fullWidth size="lg" onClick={() => onOpen()}>
          Doe agora!
        </Button>
        {/* </S.ButtonContainer> */}
      </S.Container>
      <S.Image src={help5} />
    </S.Wrapper>
  )
}
