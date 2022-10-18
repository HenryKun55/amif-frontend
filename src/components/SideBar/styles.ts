import tw, { styled } from 'twin.macro'
import { Link as DOMLink } from 'react-router-dom'

export const Container = styled.div([
  tw`h-full overflow-auto w-56 flex flex-col border-r`,
])

export const List = styled.ul([tw`flex flex-col px-2 pt-10 gap-1`])

export const ListItem = styled.li([tw`w-full`])

type LinkProps = {
  active: boolean
}

export const Link = styled(DOMLink, {
  shouldForwardProp: props => props !== 'active',
})<LinkProps>(({ active }) => [
  tw`w-full flex items-center gap-3 py-2 rounded font-semibold`,
  tw`cursor-pointer transition-all ease-in-out duration-200`,
  tw`hover:(bg-blue-100 text-blue-500 ring-1)`,
  active && tw`bg-blue-100 text-blue-500 ring-1`,
])

export const Version = styled.div([
  tw`w-full flex flex-1 justify-center text-xs items-end py-4`,
])
