import { api } from '..'
import { ApiOptions } from '../types'
import { ListProductsResponse } from './types'

export const productsApi = {
  list: (options: ApiOptions) => {
    return api.get<ListProductsResponse>('products', options)
  },
}
