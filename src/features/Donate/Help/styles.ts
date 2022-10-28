import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([
  tw`flex items-center pb-40 gap-10 max-w-container mx-auto`,
])

export const Container = styled.div([tw`flex flex-col`])

export const Image = styled.img([
  tw`w-[800px] h-[800px] rounded-md brightness-125 shadow-xl`,
])

export const Title = styled.h1([
  tw`font-extrabold text-5xl md:(text-7xl) lg:(text-8xl)`,
])

type TitleEmphasisProps = {
  isBeige?: boolean
}

export const TitleEmphasis = styled.h2<TitleEmphasisProps>(({ isBeige }) => [
  tw`font-extrabold text-5xl text-blue-400 md:(text-7xl) lg:(text-8xl)`,
  isBeige && tw`text-green-600`,
])

export const Description = styled.span([
  tw`font-semibold text-lg pt-4 md:(text-2xl)`,
])

export const Causes = styled.div([
  tw`flex gap-5 py-7 place-items-center justify-evenly`,
])

export const Cause = styled.div([tw`flex flex-col gap-3 place-items-center`])

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
