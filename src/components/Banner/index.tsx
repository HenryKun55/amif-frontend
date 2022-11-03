import { Routes } from '@/routes/routes'
import { Link } from 'react-router-dom'
import { Button } from '../Form/Button'
import * as S from './styles'
import type { Event } from '@/api/models'
import { useMemo } from 'react'
import format from 'date-fns/format'

export type BannerProps = {
  event: Event
}

export const Banner = ({ event }: BannerProps) => {
  const imageUrl = useMemo(() => {
    const image = event?.images[0]?.url
    return image || ''
  }, [event])

  const formattedDate = useMemo(
    () => format(new Date(event.startDate), 'E, dd LLL'),
    [event],
  )

  return (
    <S.Container>
      <S.Image src={imageUrl} />
      <S.Content>
        <S.Info>
          <S.Date>
            {formattedDate} - {event.startHour}
          </S.Date>
          <S.Title>{event.title}</S.Title>
          <S.Location>
            {event.address?.street} {event.address?.number},{' '}
            {event.address?.city} - {event.address?.state}
          </S.Location>
        </S.Info>
        <Link to={Routes.Eventos_Id.replace(':id', event.id)}>
          <Button variant="outlined" fullWidth>
            Saiba Mais
          </Button>
        </Link>
      </S.Content>
    </S.Container>
  )
}
