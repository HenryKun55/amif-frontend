import tw, { styled } from 'twin.macro'

export const Container = styled.div([
  tw`w-screen h-screen max-h-screen flex flex-col overflow-hidden`,
])

export const Main = styled.main([
  tw`w-full h-full max-h-[calc(100vh - 64px)] flex`,
])

export const Content = styled.div([
  tw`h-full max-h-[calc(100vh - 64px)] flex-1 bg-gray-50`,
])
