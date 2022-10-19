import { Paged, PagedRequest } from '../types'
import { Event } from '../models'

export type ListEventsRequest = PagedRequest & {
  title?: string
  startsAt?: string
  active?: boolean
}

export type ListEventsReponse = Paged<Event>
