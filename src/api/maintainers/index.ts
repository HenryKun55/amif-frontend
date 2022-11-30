import api from '..'
import {
  CreateMaintainerRequest,
  CreateMaintainerResponse,
  FetchMaintainerRequest,
  FetchMaintainerResponse,
  ListMaintainersRequest,
  ListMaintainersResponse,
  UpdateMaintainerRequest,
} from './types'

const endpoints = {
  fetchMaintainer: (id: string) => `maintainers/${id}`,
  listMaintainers: () => 'maintainers',
  createMaintainer: () => 'maintainers',
  updateMaintainer: (id: string) => `maintainers/${id}`,
}

const maintainersApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchMaintainer: builder.query<
      FetchMaintainerResponse,
      FetchMaintainerRequest
    >({
      query: ({ id }) => endpoints.fetchMaintainer(id),
      providesTags: [{ type: 'Maintainers', id: 'Id' }],
    }),
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
    updateMaintainer: builder.mutation<void, UpdateMaintainerRequest>({
      query: ({ id, ...body }) => ({
        url: endpoints.updateMaintainer(id),
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Maintainers', { type: 'Maintainers', id: 'Id' }],
    }),
  }),
  overrideExisting: false,
})

export const {
  useFetchMaintainerQuery,
  useListMaintainersQuery,
  useCreateMaintainerMutation,
  useUpdateMaintainerMutation,
} = maintainersApi

export default maintainersApi
