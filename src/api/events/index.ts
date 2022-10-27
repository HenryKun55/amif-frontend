import api from '..'
import axios from '../axios'
import {
  ListEventsRequest,
  ListEventsReponse,
  FetchEventResponse,
  FetchEventRequest,
  ActivateEventRequest,
  DeactivateEventRequest,
  CreateEventResponse,
  CreateEventRequest,
  UploadEventImageRequest,
} from './types'

const endpoints = {
  fetchEvent: (id: string) => `events/${id}`,
  listEvents: () => 'events',
  createEvent: () => 'events',
  activateEvent: (id: string) => `events/${id}/activate`,
  deactivateEvent: (id: string) => `events/${id}/deactivate`,
  uploadImage: (id: string) => `events/${id}/upload`,
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
  useCreateEventMutation,
  useActivateEventMutation,
  useDeactivateEventMutation,
} = eventsApi

export default eventsApi
