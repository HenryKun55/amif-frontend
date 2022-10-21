import tw, { styled } from 'twin.macro'
import { Skeleton as SkeletonComponent } from '@/components/Skeleton'

export const Container = styled.div([tw`flex flex-col gap-4`])

export const Row = styled.div([tw`flex gap-4`])

export const Column = styled(SkeletonComponent)([tw`flex-1`])

export const CellContainer = styled.div([tw`flex flex-col gap-8 mt-4`])

export const Cell = styled(SkeletonComponent)([tw`w-full`])
