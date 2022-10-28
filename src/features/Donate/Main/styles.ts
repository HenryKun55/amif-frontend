import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([
  tw`flex flex-col max-w-content pb-20 gap-10 mx-auto md:(flex-row justify-center) lg:(flex-row justify-center)`,
])

export const Container = styled.div([tw`flex flex-1 flex-col`])

export const Image = styled.img([
  tw`shadow-lg rounded-md md:(w-[420px] h-[420px]) lg:(w-[600px] h-[600px])`,
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
