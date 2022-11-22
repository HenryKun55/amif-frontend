import api from '..'
import { ListMaintainersRequest, ListMaintainersResponse } from './types'

const endpoints = {
  listMaintainers: () => 'maintainers',
}

const maintainersApi = api.injectEndpoints({
  endpoints: builder => ({
    listMaintainers: builder.query<
      ListMaintainersResponse,
      ListMaintainersRequest
    >({
      query: params => ({
        url: endpoints.listMaintainers(),
        params,
      }),
      providesTags: ['Maintaners'],
    }),
  }),
  overrideExisting: false,
})

export const { useListMaintainersQuery } = maintainersApi

export default maintainersApi
