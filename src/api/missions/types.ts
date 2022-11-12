import { Mission } from '../models'
import { Paged, PagedRequest } from '../types'

export type MissionSortBy = {
  id: string
  title: string
  startsAt: string
  createdAt: string
  active: boolean
}

export type ListMissionsRequest = PagedRequest<MissionSortBy> & {
  title?: string
  startDate?: string
  active?: boolean
}

export type ListMissionsResponse = Paged<Mission>
