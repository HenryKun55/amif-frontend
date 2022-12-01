import api from '..'
import {
  ActivateAssociateRequest,
  CreateAssociateRequest,
  CreateAssociateResponse,
  DeactivateAssociateRequest,
  FetchAssociateRequest,
  FetchAssociateResponse,
  ListAssociatesRequest,
  ListAssociatesResponse,
  UpdateAssociateRequest,
} from './types'

const endpoints = {
  fetchAssociate: (id: string) => `associates/${id}`,
  createAssociate: () => 'associates',
  updateAssociate: (id: string) => `associates/${id}`,
  listAssociates: () => 'associates',
  activateAssociate: (id: string) => `associates/${id}/activate`,
  deactivateAssociate: (id: string) => `associates/${id}/deactivate`,
}

const associatesApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchAssociate: builder.query<
      FetchAssociateResponse,
      FetchAssociateRequest
    >({
      query: ({ id }) => endpoints.fetchAssociate(id),
      providesTags: [{ type: 'Associates', id: 'Id' }],
    }),
    createAssociate: builder.mutation<
      CreateAssociateResponse,
      CreateAssociateRequest
    >({
      query: body => ({
        url: endpoints.createAssociate(),
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Associates'],
    }),
    updateAssociate: builder.mutation<void, UpdateAssociateRequest>({
      query: ({ id, ...body }) => ({
        url: endpoints.updateAssociate(id),
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Associates'],
    }),
    listAssociates: builder.query<
      ListAssociatesResponse,
      ListAssociatesRequest
    >({
      query: params => ({
        url: endpoints.listAssociates(),
        params,
      }),
      providesTags: ['Associates'],
    }),
    activateAssociate: builder.mutation<void, ActivateAssociateRequest>({
      query: ({ id }) => ({
        url: endpoints.activateAssociate(id),
        method: 'PUT',
      }),
      invalidatesTags: ['Associates', { type: 'Associates', id: 'Id' }],
    }),
    deactivateAssociate: builder.mutation<void, DeactivateAssociateRequest>({
      query: ({ id }) => ({
        url: endpoints.deactivateAssociate(id),
        method: 'PUT',
      }),
      invalidatesTags: ['Associates', { type: 'Associates', id: 'Id' }],
    }),
  }),
  overrideExisting: false,
})

export const {
  useFetchAssociateQuery,
  useCreateAssociateMutation,
  useUpdateAssociateMutation,
  useListAssociatesQuery,
  useActivateAssociateMutation,
  useDeactivateAssociateMutation,
} = associatesApi

export default associatesApi
