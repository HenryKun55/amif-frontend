import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import * as S from './styles'
import SetDefaultOptions from 'date-fns/setDefaultOptions'
import { Button } from '../Form/Button'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsClock } from 'react-icons/bs'

type CardMissionProps = {
  mission: {
    title: string
    images: {
      id: string
      url: string
    }[]
    description: string
    address?: {
      state?: string
      city?: string
    }
  }
}

export const CardMission = ({ mission }: CardMissionProps) => {
  const { description, title, images, address } = mission

  const textLimit = (text: string) => {
    return `${text.substr(0, 80)}...`
  }

  SetDefaultOptions({ locale: ptBR })

  return (
    <S.Container>
      <S.Banner background={images[0].url}>
        <S.Left>
          <S.Location>
            <S.Span>
              <HiOutlineLocationMarker />
              {address?.city}, {address?.state}
            </S.Span>
          </S.Location>
        </S.Left>
      </S.Banner>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Section>
          <S.Span>{textLimit(description)}</S.Span>
        </S.Section>
      </S.Content>
    </S.Container>
  )
}
