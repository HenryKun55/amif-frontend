import tw, { styled } from 'twin.macro'

export const Container = styled.div([tw`w-full flex flex-col px-8 pb-8 gap-4`])

export const Row = styled.div([
  tw`w-full flex flex-col lg:flex-row items-center gap-4`,
])
