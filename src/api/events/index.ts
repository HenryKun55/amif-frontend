import api from '..'
import {
  CreateEventRequest,
  CreateEventResponse,
  FindEventRequest,
  FindEventResponse,
  FindMainEventResponse,
  ListEventsRequest,
  ListEventsResponse,
  MakeEventAsMainRequest,
} from './types'

const endpoints = {
  createEvent: () => '/events',
  listEvents: () => '/events',
  findMainEvent: () => '/events/main',
  findEvent: (id: string) => `/events/${id}`,
  makeEventAsMain: (id: string) => `/events/${id}/make-main`,
}

const eventsApi = api.injectEndpoints({
  endpoints: builder => ({
    createEvent: builder.mutation<CreateEventResponse, CreateEventRequest>({
      query: params => ({
        url: endpoints.createEvent(),
        params,
      }),
    }),
    listEvents: builder.query<ListEventsResponse, ListEventsRequest>({
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
    findMainEvent: builder.query<FindMainEventResponse, void>({
      query: endpoints.findMainEvent,
    }),
    findEvent: builder.query<FindEventResponse, FindEventRequest>({
      query: ({ id }) => endpoints.findEvent(id),
    }),
    makeEventAsMain: builder.query<void, MakeEventAsMainRequest>({
      query: ({ id }) => endpoints.makeEventAsMain(id),
    }),
  }),
  overrideExisting: false,
})

export const {
  useListEventsQuery,
  useCreateEventMutation,
  useFindMainEventQuery,
  useFindEventQuery,
  useMakeEventAsMainQuery,
} = eventsApi

export default eventsApi
