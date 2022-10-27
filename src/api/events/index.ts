import api from '..'
import {
  ListEventsRequest,
  ListEventsReponse,
  FetchEventResponse,
  FetchEventRequest,
  ActivateEventRequest,
  DeactivateEventRequest,
} from './types'

const endpoints = {
  fetchEvent: (id: string) => `events/${id}`,
  fetchEventMain: () => '/events/main',
  listEvents: () => 'events',
  activateEvent: (id: string) => `events/${id}/activate`,
  deactivateEvent: (id: string) => `events/${id}/deactivate`,
}

const eventsApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchEvent: builder.query<FetchEventResponse, FetchEventRequest>({
      query: ({ id }) => endpoints.fetchEvent(id),
    }),
    fetchEventMain: builder.query<FetchEventResponse, void>({
      query: () => endpoints.fetchEventMain(),
    }),
    listEvents: builder.query<ListEventsReponse, ListEventsRequest>({
      query: params => ({
        url: endpoints.listEvents(),
        params,
      }),
      providesTags: ['Events'],
    }),
    activateEvent: builder.mutation<void, ActivateEventRequest>({
      query: ({ id }) => ({
        url: endpoints.activateEvent(id),
        method: 'PUT',
      }),
      invalidatesTags: ['Events'],
    }),
    deactivateEvent: builder.mutation<void, DeactivateEventRequest>({
      query: ({ id }) => ({
        url: endpoints.deactivateEvent(id),
        method: 'PUT',
      }),
      invalidatesTags: ['Events'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useFetchEventQuery,
  useListEventsQuery,
  useFetchEventMainQuery,
  useActivateEventMutation,
  useDeactivateEventMutation,
} = eventsApi

export default eventsApi
