import { Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

export const Container = styled.div([
  tw`relative w-full bg-white p-6 border-b border-b-gray-200`,
])

export const Text = styled.span([
  tw`font-bold text-blue-500 last-of-type:text-blue-300`,
])

const buttonStyles = [
  tw`absolute right-5 top-[calc(100% - 25px)] bg-blue-500 w-[50px] h-[50px]`,
  tw`flex items-center justify-center rounded-full cursor-pointer`,
  tw`hover:bg-blue-400`,
]

export const Button = styled.button(buttonStyles)

export const ButtonAsLink = styled(Link)(buttonStyles)
