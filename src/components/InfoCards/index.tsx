import { TwStyle } from 'twin.macro'
import * as S from './styles'

type InfoCardsProps = {
  icon: any
  primaryTextColor: TwStyle
  bgColorIcon: TwStyle
  titleColor: TwStyle
  title?: string
  description: string
  twoLine?: boolean
  descriptionTwo?: string
}

export const InfoCards = ({
  icon,
  primaryTextColor: primaryColor,
  bgColorIcon: secondaryColor,
  description,
  titleColor,
  title,
  twoLine,
  descriptionTwo,
}: InfoCardsProps) => {
  return (
    <S.Section primaryColor={primaryColor}>
      <S.Icon secondaryColor={secondaryColor}>{icon}</S.Icon>
      <S.InfoBlock>
        <S.Description titleColor={titleColor}>{title}</S.Description>
        {twoLine ? (
          <div>
            <S.SpanNoWrap>{description}</S.SpanNoWrap>
            <S.SpanNoWrap>{descriptionTwo}</S.SpanNoWrap>
          </div>
        ) : (
          <span>{description}</span>
        )}
      </S.InfoBlock>
    </S.Section>
  )
}
