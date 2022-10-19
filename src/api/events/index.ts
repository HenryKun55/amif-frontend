import api from '..'
import { ListEventsRequest, ListEventsReponse } from './types'

const endpoints = {
  listEvents: () => 'events',
}

const eventsApi = api.injectEndpoints({
  endpoints: builder => ({
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

export const { useListEventsQuery } = eventsApi

export default eventsApi
