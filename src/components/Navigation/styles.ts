import { Link as DOMLink } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

export const Navigation = styled.nav([
  tw`w-full h-[120px] flex items-center px-5 bg-gray-200`,
])

export const Link = styled(DOMLink)()

export const LogoImage = styled.img([tw`w-[120px] h-[120px] object-contain`])

export const List = styled.ul([tw`flex gap-5 items-center ml-auto`])

export const ListItem = styled.li([tw`text-lg font-semibold text-gray-600`])
