import help1 from '@/assets/help-1.jpg'

import * as S from './styles'

export const MainDonate = () => {
  return (
    <S.Wrapper>
      <S.Image src={help1} />
      <S.Container>
        <S.TitleContainer>
          <S.Title>Ajude</S.Title>
          <S.TitleSub>
            nessa <S.TitleSubEmphasis>obra</S.TitleSubEmphasis>
          </S.TitleSub>
        </S.TitleContainer>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit
          mauris bibendum, tincidunt mauris a, pretium nunc. Curabitur quam
          neque, egestas at maximus fringilla, rhoncus non neque. Suspendisse
          dictum nisl eget condimentum sodales. Vestibulum interdum nibh eget
          libero tempus sagittis. Aenean sagittis ultricies justo, in dignissim
          nulla. Duis placerat lectus eu eros tempus sollicitudin et sed purus.
          Integer auctor tempor iaculis. Pellentesque vulputate blandit arcu. Ut
          a orci ut tellus dignissim placerat. Ut nec sollicitudin augue. Morbi
          vehicula viverra pharetra. Sed vitae placerat neque.
        </S.Description>
      </S.Container>
    </S.Wrapper>
  )
}
