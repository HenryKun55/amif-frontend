import tw, { css, styled } from 'twin.macro'

export const Wrapper = styled.div(tw`w-full flex flex-col flex-1 `)
export const Header = styled.header([tw`w-full bg-gray-200 mb-10`])

export const Content = styled.section(tw`w-full flex justify-center p-4`)

export const TitleWrapper = styled.div([tw`w-full max-w-content mx-auto px-4`])

export const Title = styled.h1([tw`py-10 font-bold text-5xl text-blue-400`])

export const Description = styled.p([
  tw`text-gray-500 text-lg pb-8`,
  tw`max-w-[800px]`,
  css`
    strong {
      ${tw`font-semibold inline-block pt-2 text-sm`}
    }
  `,
])
