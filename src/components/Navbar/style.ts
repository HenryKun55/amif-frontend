import tw, { styled } from 'twin.macro'
import { Link as DOMLink } from 'react-router-dom'

export const Wrapper = styled.div([tw`w-full flex justify-center border-b-2`])

export const Container = styled.div([
  tw`w-full max-w-container flex items-center text-xl text-gray-800 p-2`,
])

export const Logo = styled.div([tw`w-8/12 `, tw`lg:flex lg:w-3/12 m-2`])

export const Image = styled.img([tw`w-28`])

export const Content = styled.div([tw`hidden`, tw`lg:flex w-6/12`])

export const Donate = styled.div([tw`flex w-3/12 justify-end mr-3.5`])

export const Menu = styled.ul([tw`flex justify-between w-full items-center `])

export const Hamburger = styled.button([tw`lg:hidden`])

type LinkProps = {
  active: boolean
}

export const Link = styled(DOMLink, {
  shouldForwardProp: props => props !== 'active',
})<LinkProps>(({ active }) => [
  tw`w-full flex items-center gap-3 md:font-semibold`,
  tw`cursor-pointer transition-all ease-in-out duration-200`,
  tw`hover:text-blue-500 `,
  active && tw`text-blue-500 `,
])
