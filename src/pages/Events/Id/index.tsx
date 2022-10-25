import { useFetchEventQuery } from '@/api/events'
import { YouTubeEmbed } from '@/components/YouTubeEmbed'
import { Routes } from '@/routes/routes'
import { useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'

import * as S from './styles'

function getIdFromYouTubeUrl(url?: string) {
  if (!url) return ''
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[7].length == 11 ? match[7] : false
}

export const EventsId = () => {
  const params = useParams<{ id: string }>()
  const id = params.id || ''
  const { data: event, isLoading } = useFetchEventQuery({ id })

  const videoId = useMemo(() => getIdFromYouTubeUrl(event?.youtubeUrl), [event])

  const images: ReactImageGalleryItem[] = useMemo(
    () =>
      event?.images.map(
        image => ({ original: image.url } as ReactImageGalleryItem),
      ) || [],
    [event],
  )

  if (isLoading) {
    return <div>Loading... </div>
  }

  if (!event) {
    return <Navigate to={Routes.NotFound} replace />
  }

  return (
    <S.Container>
      <S.Banner>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showThumbnails={false}
          showFullscreenButton={false}
          showBullets={images.length > 1}
        />
      </S.Banner>
      <S.Content>
        <S.LeftContent>
          <S.Title>{event.title}</S.Title>
          <S.Description>{event.description}</S.Description>
        </S.LeftContent>
        <S.RightContent>
          {videoId && <YouTubeEmbed videoId={videoId} />}
        </S.RightContent>
      </S.Content>
    </S.Container>
  )
}
