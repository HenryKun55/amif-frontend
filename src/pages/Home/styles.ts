import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([
  tw`w-full flex flex-col items-center bg-gray-100 overflow-x-hidden`,
])

export const Container = styled.div([
  tw`w-full flex max-w-content flex-1 flex-col pt-20 pb-40 overflow-auto `,
])
