import { useFetchEventMainQuery } from '@/api/events'
import { Banner } from '../Banner'
import * as S from './styles'

export const MainEventBanner = () => {
  const { data: event, isLoading } = useFetchEventMainQuery()

  if (isLoading) {
    return <div>Carregando...</div>
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
