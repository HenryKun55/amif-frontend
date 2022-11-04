import tw, { styled, css } from 'twin.macro'
import { Link } from 'react-router-dom'
import DefaultImage from '../../assets/default-image.svg'

export const Container = styled(Link)([
  tw`flex flex-col w-[325px] h-[280px] rounded-xl border border-gray-200 bg-white`,
  tw`cursor-pointer transition-all ease-in-out duration-300`,
  tw`hover:(shadow-lg -translate-y-1)`,
])

type BannerProps = {
  background: string
}

export const Banner = styled.div<BannerProps>(({ background }) => [
  tw`flex w-full h-2/3 rounded-t-xl`,
  css`
    background: url(${background}), url(${DefaultImage});
    background-color: white;
    background-size: cover;
  `,
])

export const Date = styled.div([
  tw`flex flex-col justify-center items-center w-11 h-11 bg-white rounded-md leading-3 shadow-md`,
])

export const Left = styled.div([tw`flex h-full w-4/12 items-end p-2`])

export const Right = styled.div([tw`flex h-full w-8/12 justify-end p-2`])

export const Day = styled.span([
  tw`font-extrabold text-blue-500 text-xl leading-4 pb-1`,
])

export const Month = styled.div([tw`text-blue-400 font-semibold`])

export const Subscribe = styled.div([tw``])

export const Content = styled.div([tw`flex flex-col p-2.5`])

export const Title = styled.h2([tw`font-bold text-blue-500 text-[1.1rem]`])

export const Span = styled.span([
  tw`flex gap-1.5 items-center font-semibold text-gray-500 text-base`,
])

export const Section = styled.div([tw`flex justify-between pr-2.5`])
