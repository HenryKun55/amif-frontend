import { Link as DOMLink } from 'react-router-dom'
import tw, { css, styled } from 'twin.macro'

type ContainerProps = {
  width: number
}

export const Container = styled.div<ContainerProps>(({ width }) => [
  tw`relative h-full overflow-auto w-[400px] flex flex-col border-r`,
  css`
    width: ${width}px;
  `,
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
  tw`hover:(bg-blue-50 text-blue-500 ring-1 opacity-75)`,
  active &&
  tw`bg-blue-100 text-blue-500 ring-1 hover:(bg-blue-100 opacity-100)`,
])

export const Version = styled.div([
  tw`w-full flex flex-1 justify-center text-xs items-end py-4`,
])

export const ResizeStick = styled.div([
  tw`absolute top-0 right-0 w-2 h-full bg-transparent`,
  css`
    cursor: col-resize;
  `,
])
