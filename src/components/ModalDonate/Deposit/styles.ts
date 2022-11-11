import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div(
  tw`flex flex-col w-full p-10 items-center gap-3`,
)

export const Logo = styled.img(tw`w-6/12 mb-8`)

export const Description = styled.span(tw`text-sm w-full font-semibold`)

export const Versicle = styled.span(tw`text-[1rem] text-brown-500 italic mt-4`)
