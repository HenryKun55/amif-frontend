import { Paged, PagedRequest } from '../types'
import { Event } from '../models'

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

export type FetchEventMainRequest = {
  id?: string
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
