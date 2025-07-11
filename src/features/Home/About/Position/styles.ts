import tw, { styled } from 'twin.macro'

export const Container = styled.div([
  tw`flex flex-col w-52 justify-start items-center`,
])

export const Image = styled.img(
  tw`flex-shrink-0 rounded-full w-40 h-40 mb-2 object-cover hover:ring-2`,
)

export const Name = styled.span(
  tw`flex justify-center items-center text-center `,
)

export const Role = styled.span(tw`text-center text-gray-500 text-sm`)
