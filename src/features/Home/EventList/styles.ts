import { CardEvent as CardEventComponent } from '@/components/CardEvent'
import tw, { styled } from 'twin.macro'

export const Container = styled.div([tw`flex gap-4 overflow-x-auto px-4 py-8`])

export const CardEvent = styled(CardEventComponent)([tw`flex-shrink-0`])
