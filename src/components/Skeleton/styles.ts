import tw, { css, styled, TwStyle } from 'twin.macro'
import { SkeletonProps } from '.'

const containerModifiers: { [key: string]: TwStyle } = {
  rounded: tw`rounded-lg`,
  circle: tw`rounded-full`,
}

export const Container = styled.div<SkeletonProps>(
  ({ width, height, shape = 'rounded' }) => [
    tw`bg-gray-500 flex-shrink-0`,
    containerModifiers[shape],
    css`
      width: ${width}px;
      height: ${height}px;
    `,
  ],
)
