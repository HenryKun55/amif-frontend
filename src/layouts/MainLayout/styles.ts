import tw, { styled } from 'twin.macro'

import { Button } from '@/components/Form/Button'

export const Wrapper = styled.div([
  tw`relative w-screen max-h-screen h-screen flex flex-col overflow-hidden`,
])

export const Content = styled.div([tw`w-full h-full overflow-y-auto`])

export const Donate = styled.div([
  tw`absolute w-min z-20 bottom-14 right-5`,
  tw`sm:right-10 bottom-10`,
])

export const DonateButton = styled(Button)([
  tw`relative w-20 h-20 flex flex-col items-center justify-center shadow-lg`,
  tw`md:(w-24 h-24) lg:(w-28 h-28)`,
  tw`hover:ring-2`,
])

type TooltipProps = {
  visible: boolean
}

export const Tooltip = styled.div<TooltipProps>(({ visible }) => [
  tw`absolute bottom-28 opacity-0 transition-all ease-in-out duration-300`,
  visible && tw`opacity-100`,
])

export const TooltipContent = styled.div([
  tw`w-max font-normal text-sm mb-2 py-1 px-2`,
  tw`rounded-sm bg-[#2F3847] whitespace-nowrap`,
])
