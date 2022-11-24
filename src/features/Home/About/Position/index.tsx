import defaultImg from '@/assets/user-default.png'

import * as S from './styles'

type PositionProps = {
  image: string
  role: string
  name: string
}

export const Position = ({ role, image, name }: PositionProps) => {
  return (
    <S.Container>
      <S.Image src={image || defaultImg} />
      <S.Name>{name}</S.Name>
      <S.Role>{role}</S.Role>
    </S.Container>
  )
}
