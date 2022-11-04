import tw, { styled } from 'twin.macro'
import { Skeleton } from '../Skeleton'

export const Container = styled.div([tw`w-full max-w-container mx-auto p-4`])

export const LoadingContainer = styled.div([
  tw`w-full max-w-container mx-auto p-4`,
])

export const Loading = styled(Skeleton)([tw`w-full h-[500px]`])
