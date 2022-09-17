import { useListProductsQuery } from '../../hooks/products/useListProductsQuery'
import * as S from './styles'

export function Home() {
  const { products, isLoading } = useListProductsQuery()

  return (
    <S.Container>
      {isLoading && <span>Loading...</span>}
      <S.List>
        {!isLoading &&
          products.map(product => (
            <S.ListItem key={product.id}>{product.name}</S.ListItem>
          ))}
      </S.List>
    </S.Container>
  )
}
