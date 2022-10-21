import tw, { styled, css } from 'twin.macro'

export const Container = styled.div(() => [tw`flex flex-col w-screen max-h-80`])

export const Background = styled.div([tw`relative w-full `])

export const Image = styled.img([
  tw`absolute w-screen object-cover max-h-[400px]
  `,
])

export const Content = styled.div([
  tw`flex z-10 p-4 font-semibold text-white `,
  css`
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
  `,
])

export const Section = styled.div([tw`flex flex-col w-full`])

export const Title = styled.h1([tw`text-2xl font-extrabold`])

export const Description = styled.p([tw`text-sm mb-6`])

export const SectionFooter = styled.div([tw`flex flex-col`])

export const Span = styled.span([
  tw`flex items-center gap-3.5 text-xl`,
  css`
    svg {
      filter: drop-shadow(3px 3px 10px rgb(0, 0, 0, 1));
    }
  `,
])
export const Right = styled.div([
  tw`flex h-full w-4/12 justify-end items-end p-2`,
])

export const Subscribe = styled.div([tw`text-2xl`])
