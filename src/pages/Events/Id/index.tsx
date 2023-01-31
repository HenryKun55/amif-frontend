import { format } from 'date-fns'
import { useMemo } from 'react'
import { BsClock } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import { Navigate, useParams } from 'react-router-dom'

import { useFetchEventQuery } from '@/api/events'
import { MapsEmbed } from '@/components/MapsEmbed'
import { YouTubeEmbed } from '@/components/YouTubeEmbed'
import { Routes } from '@/routes/routes'
import { useAppDispatch } from '@/store'
import { openSubscribeEventModal } from '@/store/event/slice'
import { getIdFromYouTubeUrl } from '@/utils/youtube'

import * as S from './styles'

export const EventsId = () => {
  const dispatch = useAppDispatch()
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

  const theTime = format(new Date(event.startDate), 'd MMM - HH:KK (EEE)')
  const theAddress = `${event.address?.street}, ${event.address?.city} - ${event.address?.state}`

  const handleNavigation = () =>
    window.open(
      `http://maps.google.com/maps?q=${encodeURIComponent(theAddress)}`,
      '_blank',
    )

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
        <S.TitleContainer>
          <S.Title>{event.title}</S.Title>
          {event.canSubscribe && (
            <S.Button
              onClick={() =>
                dispatch(
                  openSubscribeEventModal({
                    eventId: id,
                    eventTitle: event.title,
                  }),
                )
              }
            >
              Inscreva-se
            </S.Button>
          )}
        </S.TitleContainer>
        <S.Info>
          <BsClock size={20} />
          <S.InfoText>{theTime}</S.InfoText>
        </S.Info>
        <S.Info>
          <HiOutlineLocationMarker size={24} />
          <S.InfoText highlight onClick={handleNavigation}>
            {theAddress}
          </S.InfoText>
        </S.Info>
        <S.DescriptionContainer>
          <S.DescriptionContent>
            <S.DescriptionTitle>Descrição do Evento</S.DescriptionTitle>
            <S.DescriptionText>{event.description}</S.DescriptionText>
          </S.DescriptionContent>
          {videoId && <YouTubeEmbed videoId={videoId} />}
        </S.DescriptionContainer>
        <MapsEmbed address={theAddress} />
      </S.Content>
    </S.Container>
  )
}
