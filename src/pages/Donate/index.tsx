import help1 from 'assets/help-1.jpg'
import * as S from './styles'

export const Donate = () => {
  return (
    <S.Wrapper>
      <S.Help>
        <S.HelpImage src={help1} />
        <S.HelpContent>
          <S.HelpTitle>Ajude</S.HelpTitle>
          <S.HelpTitleSub>nessa obra</S.HelpTitleSub>
          <S.HelpDescription>
            Existem muitas variações das passagens do Lorem Ipsum disponíveis,
            mas a maior parte sofreu alterações de alguma forma, pela injecção
            de humor, ou de palavras aleatórias que nem sequer
          </S.HelpDescription>
        </S.HelpContent>
      </S.Help>
    </S.Wrapper>
  )
}
