import { useListUpcomingQuery } from '@/api/events'
import * as S from './styles'

export function Home() {
  const { data: { data } = {}, isLoading } = useListUpcomingQuery({
    day: '1',
    sport_id: 1,
    page: 1,
    per_page: 10,
  })

  return (
    <S.Container>
      {isLoading && <span>Loading...</span>}
      <S.List>
        {!isLoading &&
          data?.map(product => (
            <S.ListItem key={product.id}>{product.name}</S.ListItem>
          ))}
      </S.List>
    </S.Container>
  )
}
