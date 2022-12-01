import api from '..'
import {
  ActivateMaintainerRequest,
  CreateMaintainerPaymentRequest,
  CreateMaintainerPaymentResponse,
  CreateMaintainerRequest,
  CreateMaintainerResponse,
  DeactivateMaintainerRequest,
  DeleteMaintainerRequest,
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
  activateMaintainer: (id: string) => `maintainers/${id}/activate`,
  deactivateMaintainer: (id: string) => `maintainers/${id}/deactivate`,
  deleteMaintainer: (id: string) => `maintainers/${id}`,
  createPayment: (id: string) => `maintainers/${id}/payments`,
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
    activateMaintainer: builder.mutation<void, ActivateMaintainerRequest>({
      query: ({ id }) => ({
        url: endpoints.activateMaintainer(id),
        method: 'PUT',
      }),
      invalidatesTags: ['Maintainers', { type: 'Maintainers', id: 'Id' }],
    }),
    deactivateMaintainer: builder.mutation<void, DeactivateMaintainerRequest>({
      query: ({ id }) => ({
        url: endpoints.deactivateMaintainer(id),
        method: 'PUT',
      }),
      invalidatesTags: ['Maintainers', { type: 'Maintainers', id: 'Id' }],
    }),
    deleteMaintainer: builder.mutation<void, DeleteMaintainerRequest>({
      query: ({ id }) => ({
        url: endpoints.deleteMaintainer(id),
        method: 'DELETE',
      }),
      invalidatesTags: ['Maintainers'],
    }),
    createMaintainerPayment: builder.mutation<
      CreateMaintainerPaymentResponse,
      CreateMaintainerPaymentRequest
    >({
      query: ({ id, ...body }) => ({
        url: endpoints.createPayment(id),
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useFetchMaintainerQuery,
  useListMaintainersQuery,
  useCreateMaintainerMutation,
  useUpdateMaintainerMutation,
  useActivateMaintainerMutation,
  useDeactivateMaintainerMutation,
  useDeleteMaintainerMutation,
  useCreateMaintainerPaymentMutation,
} = maintainersApi

export default maintainersApi
