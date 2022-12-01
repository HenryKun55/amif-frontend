import tw, { css, styled } from 'twin.macro'

export const Container = styled.div([
  tw`flex-1 w-full bg-gray-100 overflow-x-hidden`,
])

export const Header = styled.header([tw`w-full bg-gray-200 mb-10`])

export const TitleWrapper = styled.div([tw`w-full max-w-content mx-auto px-4`])

export const Title = styled.h1([
  tw`text-6xl py-8 font-bold text-brown-500`,
  tw`lg:(text-8xl py-10)`,
])

export const Description = styled.p([
  tw`text-gray-500 lg:text-lg pb-8`,
  tw`max-w-[800px]`,
  css`
    strong {
      ${tw`font-semibold inline-block pt-2 text-sm`}
    }
  `,
])
