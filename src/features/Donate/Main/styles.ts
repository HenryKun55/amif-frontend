import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([
  tw`flex flex-col gap-10 max-w-content pb-20 px-10 justify-center items-center lg:(flex-col) xl:(flex-row items-start) 2xl:(mx-auto)`,
])

export const Container = styled.div([
  tw`flex flex-1 flex-col items-center xl:(items-start)`,
])

export const Image = styled.img([
  tw`shadow-lg rounded-md md:(w-[420px] h-[420px]) lg:(w-[550px] h-[550px]) xl:(w-[500px] h-[500px]) 2xl:(w-[600px] h-[600px])`,
])

export const TitleContainer = styled.div([
  tw`flex flex-col items-center gap-4 pb-6 lg:(items-baseline) xl:(pb-0)`,
])

export const Title = styled.h1([
  tw`font-extrabold text-5xl text-center md:(text-8xl) lg:(text-9xl) text-blue-400`,
])

export const TitleSub = styled.h2([
  tw`font-extrabold text-5xl md:(text-5xl) lg:(text-8xl)`,
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
