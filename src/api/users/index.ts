import { removeUndefinedValues } from '@/utils/guards'

import api from '..'
import {
  CreateUserRequest,
  CreateUserResponse,
  DeleteUserRequest,
  FetchUserRequest,
  FetchUserResponse,
  ListUsersRequest,
  ListUsersResponse,
  UpdateUserRequest,
} from './types'

const endpoints = {
  fetchUser: (id: string) => `users/${id}`,
  createUser: () => `users`,
  listUsers: () => `users`,
  deleteUser: (id: string) => `users/${id}`,
  updateUser: (id: string) => `users/${id}`,
}

const usersApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchUser: builder.query<FetchUserResponse, FetchUserRequest>({
      query: ({ id }) => endpoints.fetchUser(id),
      providesTags: [{ type: 'Users', id: 'Id' }],
    }),
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
    deleteUser: builder.mutation<void, DeleteUserRequest>({
      query: ({ id }) => ({
        url: endpoints.deleteUser(id),
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation<void, UpdateUserRequest>({
      query: ({ id, ...body }) => ({
        url: endpoints.updateUser(id),
        method: 'PUT',
        body: removeUndefinedValues(body),
      }),
      invalidatesTags: ['Users'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useFetchUserQuery,
  useCreateUserMutation,
  useListUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = usersApi

export default usersApi
