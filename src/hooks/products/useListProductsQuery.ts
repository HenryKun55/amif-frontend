import { useQuery } from '@tanstack/react-query'
import { productsApi } from '../../api/products'

export const useListProductsQuery = () => {
  const query = useQuery(['products'], ({ signal }) => {
    return productsApi.list({ signal })
  })

  return {
    products: query.data?.data || [],
    isLoading: query.isLoading,
  }
}
