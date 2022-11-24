import { Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

export const Container = styled(Link)([
  tw`flex flex-col w-full rounded-lg`,
  tw`bg-white cursor-pointer border border-gray-100`,
  tw`transition-all ease-in-out duration-200`,
  tw`hover:(shadow-lg -translate-y-1)`,
])

export const Header = styled.div([tw`w-full h-[175px] max-h-[66%] rounded-t`])

export const Image = styled.img([tw`w-full h-full object-cover rounded-t`])

export const Content = styled.div([tw`flex flex-col bg-white p-2`])

export const Title = styled.h2([
  tw`font-bold text-blue-500 text-lg line-clamp-1`,
])

export const Description = styled.span([
  tw`text-gray-500 text-sm line-clamp-3 pt-2`,
])
