import tw, { css, styled } from 'twin.macro'

export const Container = styled.div([
  tw`flex flex-col items-center bg-gray-100 overflow-x-hidden`,
])

export const Banner = styled.div([
  tw`w-full flex justify-center bg-black`,
  css`
    .image-gallery {
      width: max(70%, 800px);
      overflow: hidden;
    }
    .image-gallery-swipe {
      max-height: 500px;
    }
    .image-gallery-slide img {
      width: 100%;
      object-fit: contain;
      overflow: hidden;
      object-position: center center;
    }
  `,
])

export const Content = styled.main([
  tw`w-full max-w-container flex flex-col items-center gap-8`,
  tw`lg:(flex-row gap-4) bg-gray-100 p-2 md:p-4`,
])

export const LeftContent = styled.aside([tw`flex-1`])

export const RightContent = styled.aside([tw``])

export const Title = styled.h1([tw`text-4xl font-bold`])

export const Description = styled.p([tw`text-xl pt-4 lg:max-w-xl`])
