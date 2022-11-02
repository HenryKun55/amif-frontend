import { CardEvent as CardEventComponent } from '@/components/CardEvent'
import tw, { styled } from 'twin.macro'

export const Container = styled.div([
  tw`w-full flex flex-col gap-4 items-center justify-center py-4`,
])

export const Title = styled.h2([tw`text-4xl md:text-5xl font-bold`])

export const Highlight = styled.span([tw`text-yellow-500`])

export const CardList = styled.div([
  tw`w-full flex gap-4 overflow-x-auto px-4 py-4 lg:justify-center`,
])

export const CardEvent = styled(CardEventComponent)([tw`flex-shrink-0`])
