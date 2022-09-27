import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = import.meta.env.VITE_API_URL

export const TOKEN_KEY = '@betapp/token'

const api = createApi({
  tagTypes: ['Events', 'Missions'],
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
