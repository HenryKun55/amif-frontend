import { CtaDonate } from '@/components/CtaDonate'
import { CtaMaintainer } from '@/components/CtaMaintainer'
import help1 from 'assets/help-1.jpg'
import help2 from 'assets/help-2.jpg'
import help3 from 'assets/help-3.jpg'
import help4 from 'assets/help-4.jpg'
import help5 from 'assets/help-5.jpg'
import CountUp from 'react-countup'

import { FaChild } from 'react-icons/fa'
import { GiHeavyArrow } from 'react-icons/gi'
import { MdFamilyRestroom, MdVolunteerActivism } from 'react-icons/md'

import * as S from './styles'

export const Donate = () => {
  return (
    <S.Wrapper>
      <S.Help>
        <S.HelpImage src={help1} />
        <S.HelpContent>
          <S.Title>Ajude</S.Title>
          <S.TitleSub>
            nessa <S.TitleSubEmphasis>obra</S.TitleSubEmphasis>
          </S.TitleSub>
          <S.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            blandit mauris bibendum, tincidunt mauris a, pretium nunc. Curabitur
            quam neque, egestas at maximus fringilla, rhoncus non neque.
            Suspendisse dictum nisl eget condimentum sodales. Vestibulum
            interdum nibh eget libero tempus sagittis. Aenean sagittis ultricies
            justo, in dignissim nulla. Duis placerat lectus eu eros tempus
            sollicitudin et sed purus. Integer auctor tempor iaculis.
            Pellentesque vulputate blandit arcu. Ut a orci ut tellus dignissim
            placerat. Ut nec sollicitudin augue. Morbi vehicula viverra
            pharetra. Sed vitae placerat neque.
          </S.Description>
        </S.HelpContent>
      </S.Help>
      <S.Content>
        <S.ContentDescription>
          <S.Details>
            <FaChild size={40} />
            <S.DetailsText>
              <CountUp start={0} end={50} duration={2} prefix="+" />
              mil
            </S.DetailsText>
            <S.DetailsDescription>crianças</S.DetailsDescription>
          </S.Details>
          <S.Details>
            <MdFamilyRestroom size={40} />
            <S.DetailsText>
              <CountUp start={0} end={300} duration={2} prefix="+" />
            </S.DetailsText>
            <S.DetailsDescription>famílias</S.DetailsDescription>
          </S.Details>
          <S.Details>
            <GiHeavyArrow size={40} />
            <S.DetailsText>
              <CountUp start={0} end={70} duration={2} prefix="+" />
            </S.DetailsText>
            <S.DetailsDescription>missionários</S.DetailsDescription>
          </S.Details>
          <S.Details>
            <MdVolunteerActivism size={40} />
            <S.DetailsText>
              <CountUp start={0} end={100} duration={2} prefix="+" />
            </S.DetailsText>
            <S.DetailsDescription>voluntários</S.DetailsDescription>
          </S.Details>
        </S.ContentDescription>
      </S.Content>
      <S.MakeDifference>
        <S.ImagesCol>
          <S.ImagesRow>
            <S.Rounded>
              <S.RoundedImage src={help2} />
              <S.RoundedOutside />
            </S.Rounded>
            <S.Rectangle>
              <S.RectangleImage src={help3} />
            </S.Rectangle>
          </S.ImagesRow>
          <S.ImagesRow reverse>
            <S.Rounded>
              <S.RoundedImage src={help4} />
              <S.RoundedOutside />
            </S.Rounded>
            <S.Rectangle>
              <S.RectangleImage src={help5} />
            </S.Rectangle>
          </S.ImagesRow>
        </S.ImagesCol>
        <S.MakeDifferenceText>
          <S.TitleSub>
            Fazendo <br />
            <S.TitleSubEmphasis isBrown>a diferença</S.TitleSubEmphasis>
          </S.TitleSub>
          <S.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            blandit mauris bibendum, tincidunt mauris a, pretium nunc. Curabitur
            quam neque, egestas at maximus fringilla, rhoncus non neque.
          </S.Description>
          <S.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            blandit mauris bibendum, tincidunt mauris a, pretium nunc. Curabitur
            quam neque, egestas at maximus fringilla, rhoncus non neque.
          </S.Description>
        </S.MakeDifferenceText>
      </S.MakeDifference>
      <CtaMaintainer />
    </S.Wrapper>
  )
}
