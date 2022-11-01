import tw, { css, styled } from 'twin.macro'

export const Container = styled.div([
  tw`flex max-w-content items-center justify-center flex-col gap-16 relative h-full p-5 mb-48`,
])

export const Content = styled.div([
  tw`flex flex-col gap-10 items-center`,
  tw`md:flex-row`,
])

export const Section = styled.div([tw`flex flex-col gap-4 w-8/12`])

export const Title = styled.h2([
  tw`flex gap-2.5 font-bold`,
  css`
    font-size: clamp(25px, 3.514vw, 48px);
  `,
])

export const TitleSubEmphasis = styled.h3([
  tw`font-bold text-yellow-500`,
  css`
    font-size: clamp(25px, 3.514vw, 48px);
  `,
])

export const Description = styled.p([
  tw`w-full`,
  css`
    font-size: clamp(12px, 1.171vw, 16px);
  `,
])

export const ImageContainer = styled.div([tw`relative`, tw`md:w-4/12`])

export const Image = styled.img([
  tw`w-72 h-[350px] -rotate-6 rounded-2xl object-cover absolute shadow-2xl`,
])

export const ContentAbout = styled.div([
  tw`flex w-full h-[35vw] gap-10 relative mb-48`,
])

export const BgImage = styled.div(tw`w-72 h-[350px] rounded-2xl bg-blue-300  `)

export const BgSquare = styled.div(
  tw`w-[clamp(50px, 42.167vw, 576px)] h-[clamp(176px, 35.139vw, 480px)] flex-shrink-0 bg-blue-300`,
)

export const ImageTwo = styled.img(
  tw`w-10/12 h-[clamp(300px, 43.192vw, 590px)] absolute left-8 top-8`,
)

export const ContentRight = styled.div([
  tw`relative flex w-full h-[clamp(300px, 43.192vw, 590px)] justify-center items-center gap-10 mt-8 `,
])

export const ContentAboutProject = styled.div(
  tw`absolute w-[clamp(370px, 29.283vw,400px)] right-[0] top-40`,
  tw`sm:top-5`,
  tw`md:top-10`,
  tw`lg:relative lg:top-0 flex flex-col lg:w-[clamp(100px, 36.603vw,500px)] lg:h-[clamp(300px, 29.283vw,400px)] shadow-2xl bg-white z-10 p-6 `,
)
