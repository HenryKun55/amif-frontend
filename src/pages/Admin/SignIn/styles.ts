import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([
  tw`w-full h-full flex flex-col items-center`,
])

export const Title = styled.h1([tw`text-5xl font-semibold`])

export const Content = styled.div([
  tw`flex flex-col gap-5 justify-items-center`,
])
