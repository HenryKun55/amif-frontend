import api from '..'
import axios from '../axios'
import {
  ActivateEventRequest,
  CreateEventRequest,
  CreateEventResponse,
  DeactivateEventRequest,
  DeleteEventImageRequest,
  FetchEventRequest,
  FetchEventResponse,
  ListEventsReponse,
  ListEventsRequest,
  UpdateEventRequest,
  UploadEventImageRequest,
} from './types'

const endpoints = {
  fetchEvent: (id: string) => `events/${id}`,
  fetchEventMain: () => '/events/main',
  listEvents: () => 'events',
  createEvent: () => 'events',
  updateEvent: (id: string) => `events/${id}`,
  activateEvent: (id: string) => `events/${id}/activate`,
  deactivateEvent: (id: string) => `events/${id}/deactivate`,
  uploadImage: (id: string) => `events/${id}/upload`,
  deleteImage: (eventId: string, imageId: string) =>
    `events/${eventId}/images/${imageId}`,
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
    updateEvent: builder.mutation<void, UpdateEventRequest>({
      query: ({ id, ...body }) => ({
        url: endpoints.updateEvent(id),
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Events'],
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
  useActivateEventMutation,
  useDeactivateEventMutation,
  useDeleteEventImageMutation,
} = eventsApi

export default eventsApi
