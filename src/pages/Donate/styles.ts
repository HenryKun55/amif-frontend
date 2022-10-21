import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([tw`flex p-10 justify-center overflow-auto`])

export const Help = styled.div([
  tw`flex flex-col gap-5 md:(flex-row justify-center) lg:(flex-row justify-center)`,
])

export const HelpContent = styled.div([tw`flex flex-1 flex-col`])

export const HelpImage = styled.img([
  tw`md:(w-[420px] h-[420px]) lg:(w-[600px] h-[600px])`,
])

export const HelpTitle = styled.h1([
  tw`font-extrabold text-4xl md:(text-6xl) lg:(text-9xl)`,
])

export const HelpTitleSub = styled.h2([
  tw`font-extrabold text-4xl md:(text-5xl) lg:(text-8xl)`,
])

export const HelpDescription = styled.span([
  tw`font-semibold text-lg mt-4 md:(text-2xl)`,
])
