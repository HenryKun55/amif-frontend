import tw, { styled } from 'twin.macro'

import { CardMission as CardMissionComponent } from '@/components/CardMission'
import { Skeleton as SkeletonComponent } from '@/components/Skeleton'

export const Container = styled.div([
  tw`w-full h-full max-w-content mx-auto pb-10`,
])

type CardsContainerProps = {
  withPaddingBottom?: boolean
}

export const CardsContainer = styled.div<CardsContainerProps>(
  ({ withPaddingBottom }) => [
    tw`grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`,
    tw`md:gap-4 md:px-4`,
    withPaddingBottom && tw`pb-10`,
  ],
)

export const CardMission = styled(CardMissionComponent)([tw`mt-1 md:mt-0`])

export const PaginationWrapper = styled.div([
  tw`w-full flex justify-center py-4`,
])

export const Skeleton = styled(SkeletonComponent)([
  tw`w-full h-[289px] mt-1 md:mt-0`,
])
