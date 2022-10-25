import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([
  tw`flex flex-1 flex-col overflow-auto bg-gradient-to-r from-white to-blue-50`,
])

export const Help = styled.div([
  tw`flex flex-col max-w-content p-10 gap-5 mx-auto md:(flex-row justify-center) lg:(flex-row justify-center)`,
])

export const HelpContent = styled.div([tw`flex flex-1 flex-col`])

export const HelpImage = styled.img([
  tw`md:(w-[420px] h-[420px]) lg:(w-[600px] h-[600px])`,
])

export const Title = styled.h1([
  tw`font-extrabold text-4xl md:(text-6xl) lg:(text-9xl) text-blue-400`,
])

export const TitleSub = styled.h2([
  tw`font-extrabold text-4xl md:(text-5xl) lg:(text-8xl)`,
])

type TitleSubEmphasisProps = {
  isBrown?: boolean
}

export const TitleSubEmphasis = styled.span<TitleSubEmphasisProps>(
  ({ isBrown }) => [tw`text-yellow-500`, isBrown && tw`text-brown-500`],
)

export const Description = styled.span([
  tw`font-semibold text-lg mt-4 md:(text-2xl)`,
])

export const Content = styled.div([
  tw`flex items-center justify-center gap-20 py-14 bg-world bg-blue-100 bg-center`,
])

export const ContentDescription = styled.div([
  tw`flex flex-1 max-w-content justify-evenly gap-10 m-auto`,
])

export const Details = styled.div([tw`flex flex-col place-items-center`])

export const DetailsText = styled.span([
  tw`text-blue-500 font-bold text-4xl text-center`,
])

export const DetailsDescription = styled.span([
  tw`font-bold text-4xl text-center`,
])

export const MakeDifference = styled.div([
  tw`flex max-w-content gap-10 py-20 mx-auto`,
])

export const MakeDifferenceText = styled.div([tw`flex flex-1 flex-col gap-10`])

export const ImagesCol = styled.div([tw`flex flex-1 flex-col gap-10`])

type ImagesRow = {
  reverse?: boolean
}

export const ImagesRow = styled.div<ImagesRow>(({ reverse }) => [
  tw`flex gap-10`,
  reverse && tw`flex-row-reverse`,
])

export const Rounded = styled.div([tw`relative`])

export const RoundedImage = styled.img([
  tw`absolute z-10 w-[300px] h-[300px] rounded-full grayscale shadow-xl`,
])

export const RoundedOutside = styled.img([
  tw`w-[300px] h-[300px] rounded-full -left-3 -top-3 -translate-x-3 -translate-y-3 bg-blue-200`,
])

export const SmallImage = styled.img([
  tw`w-[350px] h-[350px] translate-x-16 -translate-y-10`,
])

export const Rectangle = styled.div([tw`w-[300px] h-[300px] rounded-lg`])

export const RectangleImage = styled.img([tw`rounded-lg shadow-xl`])
