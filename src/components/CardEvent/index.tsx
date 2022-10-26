/**
 *
 * CardEvent
 *
 */

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import * as S from './styles'
import SetDefaultOptions from 'date-fns/setDefaultOptions'
import { Button } from '../Form/Button'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsClock } from 'react-icons/bs'
import { MouseEventHandler, useMemo } from 'react'
import DefaultImage from '../../assets/default-image.svg'
import { Routes } from '@/routes/routes'

type CardEventProps = {
  event: {
    id: string
    startDate: string
    startHour: string
    canSubscribe: boolean
    title: string
    images: {
      id: string
      url: string
    }[]
    address?: {
      state?: string
      city?: string
    }
  }
  className?: string
  onSubscribe?: () => void
}

export const CardEvent = ({
  event,
  className,
  onSubscribe,
}: CardEventProps) => {
  const { id, startDate, startHour, canSubscribe, title, images, address } =
    event

  SetDefaultOptions({ locale: ptBR })

  const [day, month] = format(new Date(startDate), 'ee LLL').split(' ')

  const imageUrl = useMemo(() => images[0]?.url || DefaultImage, [images])

  const handleSubscribe: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    onSubscribe?.()
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
