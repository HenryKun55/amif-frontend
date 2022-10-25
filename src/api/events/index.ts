import api from '..'
import {
  ListEventsRequest,
  ListEventsReponse,
  FetchEventResponse,
  FetchEventRequest,
} from './types'

const endpoints = {
  fetchEvent: (id: string) => `events/${id}`,
  listEvents: () => 'events',
}

const eventsApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchEvent: builder.query<FetchEventResponse, FetchEventRequest>({
      query: ({ id }) => endpoints.fetchEvent(id),
    }),
    listEvents: builder.query<ListEventsReponse, ListEventsRequest>({
      query: params => ({
        url: endpoints.listEvents(),
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

export const { useFetchEventQuery, useListEventsQuery } = eventsApi

export default eventsApi
