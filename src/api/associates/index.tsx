import api from '..'
import { CreateAssociateRequest, CreateAssociateResponse } from './types'

const endpoints = {
  createAssociate: () => 'associates',
}

const associatesApi = api.injectEndpoints({
  endpoints: builder => ({
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
  }),
  overrideExisting: false,
})

export const { useCreateAssociateMutation } = associatesApi

export default associatesApi
