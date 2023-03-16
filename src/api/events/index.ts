import api from '..'
import axios from '../axios'
import {
  ActivateEventRequest,
  CreateEventRequest,
  CreateEventResponse,
  DeactivateEventRequest,
  DeleteEventImageRequest,
  DeleteEventRequest,
  FetchEventRequest,
  FetchEventResponse,
  ListEventsRequest,
  ListEventsResponse,
  ListEventSubscriptionsRequest,
  ListEventSubscriptionsResponse,
  MakeEventMainRequest,
  SubscribeToEventRequest,
  SubscribeToEventResponse,
  UpdateEventRequest,
  UploadEventImageRequest,
} from './types'

const endpoints = {
  fetchEvent: (id: string) => `events/${id}`,
  fetchEventMain: () => '/events/main',
  listEvents: () => 'events',
  createEvent: () => 'events',
  updateEvent: (id: string) => `events/${id}`,
  makeEventMain: (id: string) => `events/${id}/make-main`,
  activateEvent: (id: string) => `events/${id}/activate`,
  deactivateEvent: (id: string) => `events/${id}/deactivate`,
  uploadImage: (id: string) => `events/${id}/upload`,
  deleteImage: (eventId: string, imageId: string) =>
    `events/${eventId}/images/${imageId}`,
  subscribeToEvent: (id: string) => `events/${id}/subscribe`,
  listEventSubscriptions: (id: string) => `events/${id}/subscriptions`,
  deleteEvent: (id: string) => `events/${id}`,
}

const eventsApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchEvent: builder.query<FetchEventResponse, FetchEventRequest>({
      query: ({ id }) => endpoints.fetchEvent(id),
      providesTags: [{ type: 'Events', id: 'Id' }],
    }),
    fetchEventMain: builder.query<FetchEventResponse, void>({
      query: () => endpoints.fetchEventMain(),
    }),
    listEvents: builder.query<ListEventsResponse, ListEventsRequest>({
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
    updateEvent: builder.mutation<void, UpdateEventRequest>({
      query: ({ id, ...body }) => ({
        url: endpoints.updateEvent(id),
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Events'],
    }),
    deleteEvent: builder.mutation<void, DeleteEventRequest>({
      query: ({ id }) => ({
        url: endpoints.deleteEvent(id),
        method: 'DELETE',
      }),
      invalidatesTags: ['Events', { type: 'Events', id: 'Id' }],
    }),
    makeEventMain: builder.mutation<void, MakeEventMainRequest>({
      query: ({ eventId }) => ({
        url: endpoints.makeEventMain(eventId),
        method: 'PUT',
      }),
      invalidatesTags: ['Events', { type: 'Events', id: 'Id' }],
    }),
    activateEvent: builder.mutation<void, ActivateEventRequest>({
      query: ({ id }) => ({
        url: endpoints.activateEvent(id),
        method: 'PUT',
      }),
      invalidatesTags: ['Events', { type: 'Events', id: 'Id' }],
    }),
    deactivateEvent: builder.mutation<void, DeactivateEventRequest>({
      query: ({ id }) => ({
        url: endpoints.deactivateEvent(id),
        method: 'PUT',
      }),
      invalidatesTags: ['Events', { type: 'Events', id: 'Id' }],
    }),
    deleteEventImage: builder.mutation<void, DeleteEventImageRequest>({
      query: ({ eventId, imageId }) => ({
        url: endpoints.deleteImage(eventId, imageId),
        method: 'DELETE',
      }),
      invalidatesTags: ['Events', { type: 'Events', id: 'Id' }],
    }),
    createSubscribeToEvent: builder.mutation<
      SubscribeToEventResponse,
      SubscribeToEventRequest
    >({
      query: ({ eventId, ...body }) => ({
        url: endpoints.subscribeToEvent(eventId),
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Events'],
    }),
    listEventSubscriptions: builder.query<
      ListEventSubscriptionsResponse,
      ListEventSubscriptionsRequest
    >({
      query: ({ eventId, ...params }) => {
        return {
          url: endpoints.listEventSubscriptions(eventId),
          params,
        }
      },
      providesTags: [{ type: 'Events', id: 'Subscriptions' }],
    }),
  }),
  overrideExisting: false,
})

export function uploadEventImage({ id, image }: UploadEventImageRequest) {
  const formData = new FormData()
  formData.append('image', image)
  return axios.post(endpoints.uploadImage(id), formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const {
  useFetchEventQuery,
  useListEventsQuery,
  useFetchEventMainQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useMakeEventMainMutation,
  useActivateEventMutation,
  useDeactivateEventMutation,
  useDeleteEventImageMutation,
  useCreateSubscribeToEventMutation,
  useListEventSubscriptionsQuery,
  useLazyListEventSubscriptionsQuery,
  useDeleteEventMutation,
} = eventsApi

export default eventsApi
