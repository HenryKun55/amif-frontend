import help2 from '@/assets/help-2.jpg'
import help3 from '@/assets/help-3.jpg'
import help4 from '@/assets/help-4.jpg'
import help5 from '@/assets/help-5.jpg'

import * as S from './styles'

export const DifferenceDonate = () => {
  return (
    <S.Wrapper>
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
      <S.Container>
        <S.Title>
          Fazendo <br />
          <S.TitleEmphasis isBrown>a diferença</S.TitleEmphasis>
        </S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit
          mauris bibendum, tincidunt mauris a, pretium nunc. Curabitur quam
          neque, egestas at maximus fringilla, rhoncus non neque.
        </S.Description>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit
          mauris bibendum, tincidunt mauris a, pretium nunc. Curabitur quam
          neque, egestas at maximus fringilla, rhoncus non neque.
        </S.Description>
      </S.Container>
    </S.Wrapper>
  )
}
