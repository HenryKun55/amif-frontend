import tw, { styled } from 'twin.macro'

export const Container = styled.div([
  tw`w-full min-h-[calc(100vh - 88px - 300px)] bg-gray-100 py-8`,
])

export const EventList = styled.div([
  tw`w-full h-full flex flex-wrap gap-4 justify-center mb-8`,
])
