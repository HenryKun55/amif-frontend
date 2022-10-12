import tw, { styled } from 'twin.macro'

export const Container = styled.div([
  tw`w-screen h-full flex flex-col overflow-hidden`,
])

export const Main = styled.main([tw`w-full h-full flex`])

export const Content = styled.div([tw`h-full flex-1 bg-gray-50`])
