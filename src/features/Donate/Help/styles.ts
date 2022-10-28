import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([
  tw`flex flex-col items-center pb-40 px-5 gap-10 max-w-content mx-auto xl:(flex-row)`,
])

export const Container = styled.div([tw`flex flex-col`])

export const Image = styled.img([
  tw`w-[400px] h-[400px] rounded-md brightness-125 shadow-xl sm:(w-[600px] h-[600px]) lg:(w-[700px] h-[700px]) xl:(w-[700px] h-[700px])`,
])

export const Title = styled.h1([
  tw`font-extrabold text-center text-5xl md:text-6xl lg:(text-8xl) xl:(text-left)`,
])

type TitleEmphasisProps = {
  isBeige?: boolean
}

export const TitleEmphasis = styled.h2<TitleEmphasisProps>(({ isBeige }) => [
  tw`font-extrabold inline text-blue-400 text-5xl md:text-6xl lg:text-8xl`,
  isBeige && tw`text-green-600`,
])

export const Description = styled.span([
  tw`font-semibold text-lg text-center py-10 md:text-2xl xl:text-left`,
])

export const Causes = styled.div([
  tw`flex flex-wrap gap-5 place-items-center justify-evenly md:(flex-row)`,
])

export const Cause = styled.div([
  tw`flex w-2/5 flex-col gap-3 place-items-center md:w-max`,
])

export type BackgroundColorProps = {
  isBrown?: boolean
  isBeige?: boolean
  isRed?: boolean
  isGreen?: boolean
}

export const CauseText = styled.span<BackgroundColorProps>(
  ({ isBrown, isBeige, isRed, isGreen }) => [
    tw`font-semibold text-lg text-blue-500`,
    isBrown && tw`text-brown-500`,
    isBeige && tw`text-beige-500`,
    isRed && tw`text-red-400`,
    isGreen && tw`text-green-500`,
  ],
)

export const AreaIcon = styled.div<BackgroundColorProps>(
  ({ isBrown, isBeige, isRed, isGreen }) => [
    tw`p-4 flex items-center justify-center rounded-full bg-white ring-4 shadow-md`,
    isBrown && tw`ring-brown-500`,
    isBeige && tw`ring-beige-500`,
    isRed && tw`ring-red-400`,
    isGreen && tw`ring-green-500`,
  ],
)

export const ButtonContainer = styled.div([tw`w-64`])
