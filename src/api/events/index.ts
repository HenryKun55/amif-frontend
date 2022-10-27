import api from '..'
import {
  ListEventsRequest,
  ListEventsReponse,
  FetchEventResponse,
  FetchEventRequest,
  ActivateEventRequest,
  DeactivateEventRequest,
  CreateEventResponse,
  CreateEventRequest,
} from './types'

const endpoints = {
  fetchEvent: (id: string) => `events/${id}`,
  listEvents: () => 'events',
  createEvent: () => 'events',
  activateEvent: (id: string) => `events/${id}/activate`,
  deactivateEvent: (id: string) => `events/${id}/deactivate`,
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
      providesTags: ['Events'],
    }),
    createEvent: builder.mutation<CreateEventResponse, CreateEventRequest>({
      query: body => ({
        url: endpoints.createEvent(),
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Events'],
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
  useCreateEventMutation,
  useActivateEventMutation,
  useDeactivateEventMutation,
} = eventsApi

export default eventsApi
