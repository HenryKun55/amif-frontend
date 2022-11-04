import { useFetchEventMainQuery } from '@/api/events'
import { Banner } from '../Banner'
import * as S from './styles'

export const MainEventBanner = () => {
  const { data: event, isLoading } = useFetchEventMainQuery()

  if (isLoading) {
    return (
      <S.LoadingContainer>
        <S.Loading />
      </S.LoadingContainer>
    )
  }

  if (!event) {
    return null
  }

  return (
    <S.Container>
      <Banner event={event} />
    </S.Container>
  )
}
