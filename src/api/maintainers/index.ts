import api from '..'
import {
  CreateMaintainerRequest,
  CreateMaintainerResponse,
  ListMaintainersRequest,
  ListMaintainersResponse,
} from './types'

const endpoints = {
  listMaintainers: () => 'maintainers',
  createMaintainer: () => 'maintainers',
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
      providesTags: ['Maintainers'],
    }),
    createMaintainer: builder.mutation<
      CreateMaintainerResponse,
      CreateMaintainerRequest
    >({
      query: body => ({
        url: endpoints.createMaintainer(),
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Maintainers'],
    }),
  }),
  overrideExisting: false,
})

export const { useListMaintainersQuery, useCreateMaintainerMutation } =
  maintainersApi

export default maintainersApi
