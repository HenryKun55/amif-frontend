import { useMemo } from 'react'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import { Navigate, useParams } from 'react-router-dom'

import { useFetchMissionQuery } from '@/api/missions'
import { YouTubeEmbed } from '@/components/YouTubeEmbed'
import { Routes } from '@/routes/routes'
import { getIdFromYouTubeUrl } from '@/utils/youtube'

import * as S from './styles'

export const MissionsId = () => {
  const params = useParams<{ id: string }>()
  const id = params.id || ''
  const { data: mission, isLoading } = useFetchMissionQuery({ id })

  const videoId = useMemo(
    () => getIdFromYouTubeUrl(mission?.youtubeUrl),
    [mission],
  )

  const images: ReactImageGalleryItem[] = useMemo(
    () =>
      mission?.images.map(
        image =>
          ({
            original: image.url,
            thumbnail: image.url,
          } as ReactImageGalleryItem),
      ) || [],
    [mission],
  )

  if (isLoading) {
    return <div>Carregando...</div>
  }
  if (!mission) {
    return <Navigate to={Routes.NotFound} replace />
  }

  return (
    <S.Container>
      <S.Banner>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showBullets={false}
          showFullscreenButton={false}
          showThumbnails={images.length > 1}
        />
      </S.Banner>
      <S.Content>
        <S.LeftContent>
          <S.Title>{mission.title}</S.Title>
          <S.Description>{mission.description}</S.Description>
        </S.LeftContent>
        <S.RightContent>
          {videoId && <YouTubeEmbed videoId={videoId} />}
        </S.RightContent>
      </S.Content>
    </S.Container>
  )
}
