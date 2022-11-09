import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([
  tw`flex max-w-content flex-1 flex-col pt-20 pb-40 overflow-auto `,
])

export const Container = styled.div(
  tw`flex justify-center w-full bg-gradient-to-r from-white to-blue-50`,
)
