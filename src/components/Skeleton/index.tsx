import * as S from './styles'

export type SkeletonProps = {
  width?: number
  height?: number
  shape?: 'square' | 'rounded' | 'circle'
  className?: string
}

export const Skeleton = ({
  className,
  width = 100,
  height = 100,
  shape = 'rounded',
}: SkeletonProps) => {
  return (
    <S.Container
      className={className}
      width={width}
      height={height}
      shape={shape}
    />
  )
}
