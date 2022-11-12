import api from '..'
import { ListMissionsRequest, ListMissionsResponse } from './types'

const endpoints = {
  listMissions: () => 'missions',
}

const eventsApi = api.injectEndpoints({
  endpoints: builder => ({
    listMissions: builder.query<ListMissionsResponse, ListMissionsRequest>({
      query: params => ({
        url: endpoints.listMissions(),
        params,
      }),
      providesTags: ['Missions'],
    }),
  }),
  overrideExisting: false,
})

export const { useListMissionsQuery } = eventsApi

export default eventsApi
