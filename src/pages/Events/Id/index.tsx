import { useFetchEventQuery } from '@/api/events'
import { YouTubeEmbed } from '@/components/YouTubeEmbed'
import { Routes } from '@/routes/routes'
import { useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
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
  console.log(event)

  const videoId = useMemo(() => getIdFromYouTubeUrl(event?.youtubeUrl), [event])

  if (isLoading) {
    return <div>Loading... </div>
  }

  if (!event) {
    return <Navigate to={Routes.NotFound} replace />
  }

  return (
    <S.Container>
      <S.Banner />
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
