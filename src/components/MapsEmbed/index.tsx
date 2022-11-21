import * as S from './styles'

export type MapsEmbedProps = {
  address: string
  width?: string | number
  height?: string | number
  className?: string
}

export const MapsEmbed = ({
  width = '100%',
  height = 380,
  address,
  className,
  ...props
}: MapsEmbedProps) => {
  return (
    <S.IFrame
      className={className}
      width={width}
      height={height}
      src={`http://maps.google.com/maps?q=${encodeURIComponent(
        address,
      )}&ie=UTF8&output=embed`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded Map"
      scrolling="no"
      {...props}
    />
  )
}
