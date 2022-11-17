import { useMemo } from 'react'

import { Mission } from '@/api/models'
import { Routes } from '@/routes/routes'

import DefaultImage from '../../assets/default-image.svg'
import * as S from './styles'

type CardMissionProps = {
  mission: Mission
  className?: string
}

export const CardMission = ({ mission, className }: CardMissionProps) => {
  const imageUrl = useMemo(
    () => mission.images[0]?.url || DefaultImage,
    [mission.images],
  )

  return (
    <S.Container
      className={className}
      to={Routes.Missoes_Id.replace(':id', mission.id)}
    >
      <S.Header>
        <S.Image src={imageUrl} />
      </S.Header>
      <S.Content>
        <S.Title>{mission.title}</S.Title>
        <S.Description>{mission.description}</S.Description>
      </S.Content>
    </S.Container>
  )
}
