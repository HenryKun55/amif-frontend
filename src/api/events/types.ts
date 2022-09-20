import { User } from '@/@types/models/User'
import { Paginated, PaginatedRequest } from '../types'

export type ListUpcomingEventsRequest = PaginatedRequest & {
  sport_id: number
  day: string
}

export type ListUpcomingEventsResponse = Paginated<User>
