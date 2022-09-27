import { Event } from '@/@types/models'
import { Paged, PagedRequest } from '../types'

export interface CreateEventRequest {
  creatorId: string
  title: string
  description: string
  youtubeUrl?: string
  startsAt: string
  imagesUrls: string[]
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

export type ListEventsRequest = PagedRequest

export type ListEventsResponse = Paged<Event>

export type FindEventRequest = {
  id: string
}

export type FindEventResponse = {
  id: string
  title: string
  description: string
  youtubeUrl?: string
  isMain: boolean
  startsAt: string
  imagesUrls: string[]
  subscriptions: {
    id: string
    name: string
  }[]
  canSubscribe: boolean
  createdAt?: string
  creator?: {
    id?: string
    username?: string
  }
  address?: {
    state?: string
    district?: string
    city?: string
    street?: string
    number?: string
    zipCode?: string
  }
}

export type FindMainEventResponse = {
  id: string
  title: string
  description: string
  youtubeUrl?: string
  isMain: boolean
  startsAt: string
  imagesUrls: string[]
  subscriptions: {
    id: string
    name: string
  }[]
  canSubscribe: boolean
  createdAt?: string
  creator?: {
    id?: string
    username?: string
  }
  address?: {
    state?: string
    district?: string
    city?: string
    street?: string
    number?: string
    zipCode?: string
  }
}

export type MakeEventAsMainRequest = {
  id: string
}
