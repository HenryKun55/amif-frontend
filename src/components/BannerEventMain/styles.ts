import tw, { styled, css } from 'twin.macro'

export const Container = styled.div(() => [
  tw`relative flex flex-col w-screen min-h-[400px]`,
])

export const Background = styled.div([tw`relative w-full `])

export const Image = styled.img([
  tw`absolute w-screen object-cover max-h-[400px]
  `,
])

export const Content = styled.div([
  tw` flex z-10 p-4 h-full font-semibold text-white `,
  css`
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
  `,
])

export const Section = styled.div([
  tw`flex flex-col w-full`,
  tw`sm:w-9/12`,
  tw`md:w-10/12`,
  tw`lg:w-9/12`,
])

export const Title = styled.h1([
  tw`text-2xl max-w-[80%] font-extrabold`,
  tw`md:text-3xl`,
])

export const Description = styled.p([
  tw`text-sm mb-6`,
  tw`md:text-lg`,
  tw`lg:text-xl`,
])

export const SectionFooter = styled.div([tw`flex flex-col`])

export const Span = styled.span([
  tw`flex items-center gap-3.5 text-sm`,
  tw`md:text-lg`,
  tw`lg:text-xl`,
  css`
    svg {
      filter: drop-shadow(3px 3px 10px rgb(0, 0, 0, 1));
    }
  `,
])
export const Right = styled.div([
  tw`flex bg-blue-500 h-full relative z-20 justify-end items-end p-2`,
])

export const Subscribe = styled.div([
  tw`absolute w-28 top-2 right-2 text-sm`,
  tw`sm:w-40`,
  tw`md:text-lg md:w-52 `,
  tw`lg:text-2xl lg:w-64 `,
])
