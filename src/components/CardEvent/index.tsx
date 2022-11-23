/**
 *
 * CardEvent
 *
 */

import { format } from 'date-fns'
import { MouseEventHandler, useMemo } from 'react'
import { BsClock } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import { Event } from '@/api/models'
import { Routes } from '@/routes/routes'
import { useAppDispatch } from '@/store'
import { openSubscribeEventModal } from '@/store/event/slice'

import DefaultImage from '../../assets/default-image.svg'
import { Button } from '../Form/Button'
import * as S from './styles'

type CardEventProps = {
  event: Event
  className?: string
}

export const CardEvent = ({ event, className }: CardEventProps) => {
  const dispatch = useAppDispatch()
  const { id, startDate, startHour, canSubscribe, title, images, address } =
    event

  const [day, month] = format(new Date(startDate), 'dd LLL').split(' ')

  const imageUrl = useMemo(() => images[0]?.url || DefaultImage, [images])

  const handleSubscribe: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    dispatch(openSubscribeEventModal({ eventId: id, eventTitle: title }))
  }

  return (
    <S.Container
      to={Routes.Eventos_Id.replace(':id', id)}
      className={className}
    >
      <S.Banner background={imageUrl}>
        <S.Left>
          <S.Date>
            <S.Day>{day}</S.Day>
            <S.Month>{month}</S.Month>
          </S.Date>
        </S.Left>
        <S.Right>
          {canSubscribe && (
            <S.Subscribe>
              <Button size="sm" onClick={handleSubscribe}>
                Inscreva-se
              </Button>
            </S.Subscribe>
          )}
        </S.Right>
      </S.Banner>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Section>
          <S.Span>
            <HiOutlineLocationMarker />
            {address?.city}, {address?.state}
          </S.Span>
          <S.Span>
            <BsClock />
            {startHour}
          </S.Span>
        </S.Section>
      </S.Content>
    </S.Container>
  )
}
