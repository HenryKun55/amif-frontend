import tw, { styled } from 'twin.macro'

export const Container = styled.div([
  tw`w-full h-full flex flex-col items-center`,
])

export const EventList = styled.div([
  tw`w-full h-full max-w-container px-4 my-8`,
  tw`flex flex-wrap gap-4 justify-center`,
])
