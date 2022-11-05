import { Link } from 'react-router-dom'
import tw, { css, styled } from 'twin.macro'

import { Button as ButtonForm } from '../Form/Button'

export const Container = styled.div([
  tw`w-full flex flex-col max-w-container mt-2.5 mx-auto`,
])

export const BannerContainer = styled.div([
  tw`w-full flex flex-col-reverse px-4`,
  tw`sm:flex-row`,
])

export const BannerContent = styled.div([
  tw`flex flex-col w-full items-center justify-center gap-4 p-4 rounded-b-3xl`,
  tw`bg-gradient-to-tl from-blue-100 to-blue-500 text-blue-50`,
  tw`sm:rounded-b-none sm:rounded-l-3xl sm:gap-9`,
  tw`md:w-4/12`,
  tw`lg:w-3/12`,
])

export const Title = styled.h1([tw`text-2xl font-bold`, tw`md:text-4xl`])

export const Image = styled.img([
  tw`h-44 w-full object-cover rounded-t-3xl `,
  tw`sm:rounded-t-none sm:rounded-r-3xl sm:h-[300px]`,
  tw`md:w-8/12`,
  tw`lg:w-9/12`,
])

export const Content = styled.div([
  tw`flex w-full gap-9 my-8 overflow-x-auto py-8 px-2.5`,
])

export const Section = styled.div([
  tw`flex flex-1 flex-shrink-0 min-w-[250px] items-center justify-start text-blue-500 `,
  tw`font-semibold text-lg gap-2.5 rounded-3xl shadow-md py-3.5 px-4`,
  tw`md:px-6`,
])

export const SectionAddress = styled.div([
  tw`flex flex-1 flex-shrink-0 min-w-[250px] items-center overflow-hidden justify-start `,
  tw`text-blue-500 font-semibold text-sm gap-2.5 rounded-3xl shadow-md py-3.5 px-2.5`,
  tw`lg:text-lg`,
])

export const Icon = styled.div(
  tw`flex flex-shrink-0 justify-center items-center rounded-full bg-blue-150 w-14 h-14`,
)

export const InfoBlock = styled.div(
  tw`flex w-full overflow-hidden flex-col leading-4`,
)

export const Description = styled.span(tw`text-base text-gray-500`)

export const Address = styled.span([
  tw`whitespace-nowrap overflow-hidden pb-1`,
  css`
    display: block;
    max-width: 100%;
    text-overflow: ellipsis;
  `,
])

export const SeeMore = styled(Link)(tw`flex flex-1 flex-shrink-0`)

export const Button = styled(ButtonForm)(tw`max-w-[150px]`)
