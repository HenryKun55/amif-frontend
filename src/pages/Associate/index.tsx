import { FormAssociate } from '@/features/Associate/Create/Form'

import * as S from './styles'

export const Associate = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.TitleWrapper>
          <S.Title>Torne-se um associado</S.Title>
          <S.Description>
            {'"'}
            <i>
              Portanto, meus amados irmãos, mantenham-se firmes, e que nada os
              abale. Sejam sempre dedicados à obra do Senhor, pois vocês sabem
              que, no Senhor, o trabalho de vocês não será inútil. tempos
            </i>
            {'"'}.
            <br /> <strong>1 CORÍNTIOS 15</strong>
          </S.Description>
        </S.TitleWrapper>
      </S.Header>
      <S.Content>
        <FormAssociate />
      </S.Content>
    </S.Wrapper>
  )
}
