import tw, { styled } from 'twin.macro'

import { CardEvent as CardEventComponent } from '@/components/CardEvent'

export const Container = styled.div([
  tw`w-full flex flex-col gap-4 justify-center py-4`,
])

export const Title = styled.h2([
  tw`w-full max-w-container mx-auto block text-xl font-bold pl-4`,
])

export const CardList = styled.div([
  tw`w-full flex gap-4 overflow-x-auto px-4 py-4 max-w-container mx-auto`,
])

export const CardEvent = styled(CardEventComponent)([tw`flex-shrink-0`])
