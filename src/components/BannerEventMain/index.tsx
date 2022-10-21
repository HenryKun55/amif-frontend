import { format } from 'date-fns'
import { BsCalendarEvent, BsClock } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import SetDefaultOptions from 'date-fns/setDefaultOptions'
import { ptBR } from 'date-fns/locale'

import * as S from './styles'
import { Button } from '../Form/Button'
import { useWindowWidth } from '@react-hook/window-size'

type BannerEventMainProps = {
  event: {
    startDate: string
    startHour: string
    canSubscribe: boolean
    description: string
    title: string
    image: {
      id: string
      url: string
    }
    address?: {
      street?: string
      state?: string
      city?: string
    }
  }
}

export const BannerEventMain = ({ event }: BannerEventMainProps) => {
  const {
    startDate,
    startHour,
    canSubscribe,
    title,
    image,
    address,
    description,
  } = event
  SetDefaultOptions({ locale: ptBR })
  const onlyWidth = useWindowWidth()

  const textLimit = (text: string) => {
    return `${text.substr(0, 100)}...`
  }

  return (
    <S.Container>
      <S.Background>
        <S.Image src={image.url} />
      </S.Background>
      <S.Content>
        <S.Section>
          <S.Title>{title}</S.Title>
          <S.Description>
            {onlyWidth >= 768 ? textLimit(description) : description}
          </S.Description>
          <S.SectionFooter>
            <S.Span>
              <HiOutlineLocationMarker /> {address?.street}, {address?.city},{' '}
              {address?.state}
            </S.Span>
            <S.Span>
              <BsCalendarEvent />{' '}
              {format(new Date(startDate), 'hh  MMMM  yyyy')}
            </S.Span>
            <S.Span>
              <BsClock />
              {startHour}
            </S.Span>
          </S.SectionFooter>
        </S.Section>
        {canSubscribe && (
          <S.Right>
            <S.Subscribe>
              <Button size="lg" shape="pill">
                Inscreva-se
              </Button>
            </S.Subscribe>
          </S.Right>
        )}
      </S.Content>
    </S.Container>
  )
}
