import api from '..'
import { ListUpcomingEventsRequest, ListUpcomingEventsResponse } from './types'

const endpoints = {
  listUpcoming: () => 'events/upcoming',
}

const eventsApi = api.injectEndpoints({
  endpoints: builder => ({
    listUpcoming: builder.query<
      ListUpcomingEventsResponse,
      ListUpcomingEventsRequest
    >({
      query: params => ({
        url: endpoints.listUpcoming(),
        params,
      }),
      providesTags: result =>
        result?.data
          ? [
              ...result.data.map(({ id }) => ({ type: 'Events', id } as const)),
              { type: 'Events', id: 'LIST' },
            ]
          : [{ type: 'Events', id: 'LIST' }],
    }),
  }),
  overrideExisting: false,
})

export const { useListUpcomingQuery } = eventsApi

export default eventsApi
