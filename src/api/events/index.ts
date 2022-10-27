import api from '..'
import {
  ListEventsRequest,
  ListEventsReponse,
  FetchEventResponse,
  FetchEventRequest,
  FetchEventMainRequest,
} from './types'

const endpoints = {
  fetchEvent: (id: string) => `events/${id}`,
  fetchEventMain: () => '/events/main',
  listEvents: () => 'events',
}

const eventsApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchEvent: builder.query<FetchEventResponse, FetchEventRequest>({
      query: ({ id }) => endpoints.fetchEvent(id),
    }),
    fetchEventMain: builder.query<FetchEventResponse, FetchEventMainRequest>({
      query: () => endpoints.fetchEventMain(),
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

export const {
  useFetchEventQuery,
  useListEventsQuery,
  useFetchEventMainQuery,
} = eventsApi

export default eventsApi
