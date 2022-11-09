import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([
  tw`flex flex-col max-w-content gap-10 py-20 mx-8 xl:flex-row`,
])

export const ImagesCol = styled.div([tw`flex flex-1 flex-col gap-10`])

type ImagesRow = {
  reverse?: boolean
}

export const ImagesRow = styled.div<ImagesRow>(({ reverse }) => [
  tw`flex flex-wrap justify-center gap-10 mx-auto lg:flex-nowrap`,
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

export const Container = styled.div([
  tw`flex flex-1 flex-col gap-10 text-center`,
])

export const Title = styled.h2([
  tw`font-extrabold text-5xl md:text-6xl lg:text-8xl`,
])

type TitleEmphasisProps = {
  isBrown?: boolean
}

export const TitleEmphasis = styled.span<TitleEmphasisProps>(({ isBrown }) => [
  tw`text-yellow-500`,
  isBrown && tw`text-brown-500`,
])

export const Description = styled.span([
  tw`font-semibold text-lg mt-4 md:text-xl`,
])
