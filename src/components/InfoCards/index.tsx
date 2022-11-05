import { ReactNode } from 'react'
import { TwStyle } from 'twin.macro'

import * as S from './styles'

type InfoCardsProps = {
  icon: ReactNode
  primaryTextColor: TwStyle
  bgColorIcon: TwStyle
  titleColor: TwStyle
  title?: string
  description: string[]
}

export const InfoCards = ({
  icon,
  primaryTextColor: primaryColor,
  bgColorIcon: secondaryColor,
  description,
  titleColor,
  title,
}: InfoCardsProps) => {
  return (
    <S.Section primaryColor={primaryColor}>
      <S.Icon secondaryColor={secondaryColor}>{icon}</S.Icon>
      <S.InfoBlock>
        <S.Description titleColor={titleColor}>{title}</S.Description>
        {description.map((d, key) => (
          <S.SpanNoWrap key={key}>{d}</S.SpanNoWrap>
        ))}
      </S.InfoBlock>
    </S.Section>
  )
}
