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

export type CreateMissionRequest = {
  title: string
  description: string
  youtubeUrl?: string
  startsAt: string
  address: {
    state: string
    district: string
    city: string
    street: string
    number: string
    zipCode: string
  }
}

export type CreateMissionResponse = {
  missionId: string
}

export type UploadMissionImageRequest = {
  id: string
  image: File
}
