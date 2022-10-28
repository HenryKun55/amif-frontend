import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([
  tw`relative w-screen max-h-screen h-screen flex flex-col overflow-hidden`,
])

export const Content = styled.div([tw`w-full h-full overflow-y-auto`])
