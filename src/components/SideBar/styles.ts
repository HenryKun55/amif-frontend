import tw, { styled } from 'twin.macro'
import { Link as DOMLink } from 'react-router-dom'

export const Container = styled.div([tw`h-full w-56 flex flex-col border-r`])

export const List = styled.ul([tw`flex flex-col px-2 pt-10 gap-1`])

export const ListItem = styled.li([tw`w-full`])

export const Link = styled(DOMLink)([
  tw`w-full flex items-center gap-3 px-6 py-2 rounded font-semibold`,
  tw`cursor-pointer transition-all ease-in-out duration-200`,
  tw`hover:(bg-blue-100 text-blue-500 ring-1)`,
])

export const Version = styled.div([
  tw`w-full flex flex-1 justify-center text-xs items-end pb-4`,
])
