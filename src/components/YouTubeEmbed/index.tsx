import * as S from './styles'

export type YouTubeEmbedProps = {
  videoId: string
  width?: number
  height?: number
  className?: string
}

export const YouTubeEmbed = ({
  width = 480,
  height = 280,
  videoId,
  className,
}: YouTubeEmbedProps) => {
  return (
    <S.IFrame
      className={className}
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  )
}
