import tw, { styled } from 'twin.macro'

export const Container = styled.div(
  tw`flex flex-col text-brown-500 font-semibold italic px-6`,
  tw`md:px-24 xl:px-48`,
)

export const Description = styled.span(tw`text-2xl md:text-4xl`)

export const Mention = styled.span(
  tw`text-xl md:text-2xl w-full flex justify-end`,
)
