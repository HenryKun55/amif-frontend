import tw, { css, styled } from 'twin.macro'

export const Container = styled.div([
  tw`flex max-w-container items-center justify-center flex-col`,
  tw`2xl:mb-24 gap-16 relative h-full p-5 mb-48 mt-12`,
])

export const Content = styled.div([
  tw`flex flex-1 flex-col gap-10 items-center`,
  tw`md:flex-row`,
])

export const Section = styled.div([tw`flex flex-col gap-4 w-full`])

export const Title = styled.h2([
  tw`flex gap-2.5 font-bold`,
  css`
    font-size: clamp(25px, 3.514vw, 48px);
  `,
])

export const TitleSubEmphasis = styled.span([
  tw`font-bold text-yellow-500`,
  css`
    font-size: clamp(25px, 3.514vw, 48px);
  `,
])

export const TitleSubEmphasisBig = styled.span([
  tw`font-bold text-yellow-500`,
  css`
    font-size: clamp(40px, 5.857vw, 80px);
    line-height: clamp(25px, 3.148vw, 43px);
  `,
])

type DescriptionProps = {
  top?: boolean
}

export const Description = styled.p<DescriptionProps>(({ top }) => [
  tw`w-full`,
  css`
    font-size: clamp(12px, 1.171vw, 16px);
  `,
  top && tw`pt-[clamp(20px, 2.343vw, 32px)]`,
])

export const ImageContainer = styled.div([tw`relative`])

export const Image = styled.img([
  tw`w-72 h-[350px] -rotate-6 rounded-2xl object-cover absolute shadow-2xl`,
])

export const ContentAbout = styled.div([
  tw`flex w-full h-[35vw] gap-10 relative mb-48 md:mb-0`,
])

export const BgImage = styled.div(tw`w-72 h-[350px] rounded-2xl bg-blue-300  `)

export const BgSquare = styled.div(
  tw`w-[clamp(50px, 42.167vw, 576px)] h-[clamp(176px, 35.139vw, 480px)]`,
  tw`flex-shrink-0 bg-blue-300`,
)

export const ImageTwo = styled.img(
  tw`w-10/12 h-[clamp(300px, 43.192vw, 590px)] absolute left-8 top-8`,
)

export const ContentRight = styled.div([
  tw`relative flex w-full h-[clamp(300px, 43.192vw, 590px)]`,
  tw`justify-center items-center gap-10 mt-8 lg:justify-end`,
])

export const ContentAboutProject = styled.div(
  tw`absolute w-[clamp(370px, 29.283vw, 400px)] right-[0] top-40 flex flex-col`,
  tw`shadow-2xl bg-white z-10 p-6`,
  tw`sm:top-5`,
  tw`md:top-10`,
  tw`lg:(relative top-0 w-[clamp(100px, 36.603vw, 500px)])`,
)
