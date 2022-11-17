import tw, { css, styled } from 'twin.macro'

import { Button as ButtonComponent } from '@/components/Form/Button'

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
  tw`w-full max-w-container flex flex-col items-start gap-3`,
  tw`bg-gray-100 p-8`,
])

export const TitleContainer = styled.div([
  tw`w-full gap-4 flex flex-col justify-between md:flex-row`,
])

export const Title = styled.h1([tw`text-4xl font-bold`])

export const Info = styled.div([tw`flex gap-2 justify-start items-center`])

export type InfoTextProps = {
  highlight?: boolean
}

export const InfoText = styled.span<InfoTextProps>(({ highlight }) => [
  tw`text-gray-700 font-bold capitalize`,
  highlight && tw`text-blue-400 cursor-pointer`,
])

export const DescriptionTitle = styled.h2([
  tw`text-2xl pt-5 text-gray-700 font-bold`,
])

export const Description = styled.p([tw`text-xl lg:max-w-xl`])

export const Button = styled(ButtonComponent)([tw`z-50 mb-5`])
