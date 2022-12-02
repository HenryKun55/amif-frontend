import api from '..'
import {
  CreateUserRequest,
  CreateUserResponse,
  ListUsersRequest,
  ListUsersResponse,
} from './types'

const endpoints = {
  createUser: () => `users`,
  listUsers: () => `users`,
}

const usersApi = api.injectEndpoints({
  endpoints: builder => ({
    createUser: builder.mutation<CreateUserResponse, CreateUserRequest>({
      query: body => ({
        url: endpoints.createUser(),
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
    listUsers: builder.query<ListUsersResponse, ListUsersRequest>({
      query: params => ({
        url: endpoints.listUsers(),
        params,
      }),
      providesTags: ['Users'],
    }),
  }),
  overrideExisting: false,
})

export const { useCreateUserMutation, useListUsersQuery } = usersApi

export default usersApi
