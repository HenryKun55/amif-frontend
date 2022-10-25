import { Paged, PagedRequest } from '../types'
import { Event } from '../models'

export type FetchEventRequest = {
  id: string
}

export type FetchEventResponse = Event

export type ListEventsRequest = PagedRequest & {
  title?: string
  startDate?: string
  active?: boolean
}

export type ListEventsReponse = Paged<Event>
