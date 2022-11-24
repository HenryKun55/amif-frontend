import tw, { css, styled, TwStyle } from 'twin.macro'

type ColorProps = {
  primaryColor?: TwStyle
  secondaryColor?: TwStyle
  titleColor?: TwStyle
}
export const Section = styled.div<ColorProps>(({ primaryColor }) => [
  tw`flex flex-1 flex-shrink-0 min-w-[250px] items-center justify-start `,
  tw`font-semibold text-lg gap-2.5 rounded-3xl shadow-md py-3.5 px-2.5`,
  tw`md:px-6`,
  primaryColor,
])

export const SectionAddress = styled.div([
  tw`flex flex-1 flex-shrink-0 min-w-[250px] items-center overflow-hidden justify-start `,
  tw`text-blue-500 font-semibold text-sm gap-2.5 rounded-3xl shadow-md py-3.5 px-2.5`,
  tw`lg:text-lg`,
])

export const Icon = styled.div<ColorProps>(({ secondaryColor }) => [
  tw`flex flex-shrink-0 justify-center items-center rounded-full w-14 h-14`,
  secondaryColor,
])

export const InfoBlock = styled.div(
  tw`flex w-full overflow-hidden flex-col leading-4`,
)

export const Description = styled.span<ColorProps>(({ titleColor }) => [
  tw`text-base`,
  titleColor,
])

export const SpanNoWrap = styled.span([
  tw`whitespace-nowrap overflow-hidden pb-1`,
  css`
    display: block;
    max-width: 100%;
    text-overflow: ellipsis;
  `,
])
