import * as PopoverPrimitive from '@radix-ui/react-popover'
import tw, { css, styled } from 'twin.macro'

export const Popover = PopoverPrimitive.Root

export const PopoverTrigger = styled(PopoverPrimitive.Trigger)([tw`w-7`])

export const PopoverContent = styled(PopoverPrimitive.Content)([
  tw`w-44 border ring-1 shadow-xl rounded py-2 bg-white`,
])

export const More = styled.div([
  tw`bg-gray-100 w-7 h-7 flex items-center justify-center rounded-full`,
  tw`cursor-pointer hover:(bg-blue-100 text-blue-500)`,
])

export const Action = styled.button([
  tw`w-full flex items-center gap-3 hover:(bg-blue-100 text-blue-500) px-4 py-1 cursor-pointer`,
  css`
    color: black !important;

    &:hover {
      color: ${tw`text-blue-500`} !important;
    }
  `,
])

export const ActionTitle = styled.span([tw``])

export const ActionIcon = styled.div([tw``])
