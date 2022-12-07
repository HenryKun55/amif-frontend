import api from '..'
import {
  CreateAssociateRequest,
  CreateAssociateResponse,
  DeleteAssociateRequest,
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
  deleteAssociate: (id: string) => `associates/${id}`,
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
      invalidatesTags: ['Associates', { type: 'Associates', id: 'Id' }],
    }),
    deleteAssociate: builder.mutation<void, DeleteAssociateRequest>({
      query: ({ id }) => ({
        url: endpoints.deleteAssociate(id),
        method: 'DELETE',
      }),
      invalidatesTags: ['Associates'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useFetchAssociateQuery,
  useCreateAssociateMutation,
  useUpdateAssociateMutation,
  useListAssociatesQuery,
  useDeleteAssociateMutation,
} = associatesApi

export default associatesApi
