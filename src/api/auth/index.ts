import api from '..'
import { SignInRequest, SignInResponse } from './types'

const endpoints = {
  signIn: () => 'sign-in',
}

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation<SignInResponse, SignInRequest>({
      query: body => ({
        url: endpoints.signIn(),
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useSignInMutation } = authApi

export default authApi
