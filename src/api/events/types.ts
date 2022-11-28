import { Event } from '../models'
import { Paged, PagedRequest } from '../types'

export interface EventSortBy {
  id: string
  title: string
  startDate: string
  createdAt: string
  active: boolean
}

export type FetchEventRequest = {
  id: string
}

export type FetchEventResponse = Event

export type ListEventsRequest = PagedRequest<EventSortBy> & {
  title?: string
  startDate?: string
  active?: boolean
}

export type ListEventsReponse = Paged<Event>

export type ActivateEventRequest = {
  id: string
}

export type DeactivateEventRequest = {
  id: string
}

export type CreateEventRequest = {
  title: string
  description: string
  youtubeUrl?: string
  startDate: string
  startHour: string
  canSubscribe: boolean
  address: {
    state: string
    district: string
    city: string
    street: string
    number: string
    zipCode: string
  }
}

export type CreateEventResponse = {
  eventId: string
}

export type UploadEventImageRequest = {
  id: string
  image: File
}

export type UpdateEventRequest = {
  id: string
  title: string
  description: string
  youtubeUrl?: string
  startDate: string
  startHour: string
  canSubscribe: boolean
  address: {
    state: string
    district: string
    city: string
    street: string
    number: string
    zipCode: string
  }
}

export type DeleteEventImageRequest = {
  eventId: string
  imageId: string
}

export type MakeEventMainRequest = {
  eventId: string
}

export type SubscribeToEventRequest = {
  eventId: string
  pastorName?: string
  howKnow?: string
  church?: string
  alreadyHeard?: string | boolean
  phone: string
  name: string
  email: string
}

export type SubscribeToEventResponse = {
  subscriptionId: string
}

export type DeleteEventRequest = {
  id: string
}
