import { User } from '@/@types/models/User'
import api from '..'
import { LoginRequest, LoginResponse } from './types'

const endpoints = {
  login: () => 'auth/login',
  getUserProfile: () => 'auth/user-profile',
}

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: body => ({
        url: endpoints.login(),
        method: 'POST',
        body,
      }),
    }),
    getUserProfile: builder.query<User, void>({
      query: endpoints.getUserProfile,
    }),
  }),
  overrideExisting: false,
})

export const { useLoginMutation, useGetUserProfileQuery } = authApi

export default authApi
