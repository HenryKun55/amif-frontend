import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import * as S from './styles'
import SetDefaultOptions from 'date-fns/setDefaultOptions'
import { Button } from '../Form/Button'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsClock } from 'react-icons/bs'

type CardEventProps = {
  event: {
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
}

export const CardEvent = ({ event }: CardEventProps) => {
  const { startDate, startHour, canSubscribe, title, images, address } = event

  SetDefaultOptions({ locale: ptBR })

  const day = format(new Date(startDate), 'ee')
  const mounth = format(new Date(startDate), 'LLL')

  return (
    <S.Container>
      <S.Banner background={images[0].url}>
        <S.Left>
          <S.Date>
            <S.Day>{day}</S.Day>
            <S.Month>{mounth}</S.Month>
          </S.Date>
        </S.Left>
        <S.Right>
          {canSubscribe && (
            <S.Subscribe>
              <Button size="sm" shape="pill">
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
