import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://sandbox.bs2bet.com/v2'

export const TOKEN_KEY = '@betapp/token'

const api = createApi({
  tagTypes: ['Events', 'Tickets', 'Odds', 'Sports'],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: async headers => {
      const token = await localStorage.getItem(TOKEN_KEY)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      headers.set('environment', 'staging')
      return headers
    },
  }),
  endpoints: () => ({}),
})

export default api
