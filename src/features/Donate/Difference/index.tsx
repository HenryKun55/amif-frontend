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
          A AMIF, em parceria com igrejas e outras instituições cristãs, realiza
          trabalhos de evangelismo e ação social no contexto urbano, como em
          João Pessoa-PB, onde fez doação de alimentos e material de limpeza à
          casa de amparo a mulheres em risco social denominada “Mulheres Além
          das Placas – MAP”.
        </S.Description>
        <S.Description>
          Em Catende-PE, em parceira com a igreja AD Jardim São Luís, a AMIF
          realizou evangelismo pessoal e infantil no bairro carente de Canaã,
          com doação de cestas básicas para famílias locais. Outros lugares de
          ação: Catende, Cachoeirinha, Lajedo, Cumaru e São Caetano (PE).
        </S.Description>
      </S.Container>
    </S.Wrapper>
  )
}
