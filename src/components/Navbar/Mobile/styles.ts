import tw, { styled } from 'twin.macro'
import { Link as DOMLink } from 'react-router-dom'

type ContainerProps = {
  isExpanded: boolean
}
export const Container = styled.div<ContainerProps>(({ isExpanded }) => [
  tw`absolute right-[-350px] top-0 h-screen w-[350px] items-center z-30`,
  tw`bg-gray-100 text-blue-500 p-2 border-b-2 text-xl font-semibold `,
  tw`transition-all ease-in-out duration-300 shadow-2xl`,
  tw`lg:hidden`,
  isExpanded && tw`right-0 `,
])

export const Content = styled.ul([tw` w-full flex flex-col gap-4 px-3`])

type LinkProps = {
  active: boolean
}

export const Link = styled(DOMLink, {
  shouldForwardProp: props => props !== 'active',
})<LinkProps>(({ active }) => [
  tw`w-full flex items-center justify-start text-gray-500`,
  tw`cursor-pointer transition-all ease-in-out duration-200`,
  active && tw`text-blue-500 `,
])

export const Back = styled.button([tw`py-4`])

export const Item = styled.div([tw`flex items-center gap-4`])
