import { Mission } from '../models'
import { Paged, PagedRequest } from '../types'

export type MissionSortBy = {
  id: string
  title: string
  startDate: string
  createdAt: string
  active: boolean
}

export type FetchMissionRequest = {
  id: string
}

export type FetchMissionResponse = Mission

export type ListMissionsRequest = PagedRequest<MissionSortBy> & {
  title?: string
  startDate?: string
  active?: boolean
}

export type ListMissionsResponse = Paged<Mission>

export type CreateMissionRequest = {
  title: string
  description: string
  youtubeUrl?: string | null
  startDate: string
  startHour: string
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

export type UpdateMissionRequest = {
  id: string
  title: string
  description: string
  youtubeUrl?: string | null
  startDate: string
  startHour: string
  address: {
    state: string
    district: string
    city: string
    street: string
    number: string
    zipCode: string
  }
}

export type UploadMissionImageRequest = {
  id: string
  image: File
}

export type DeleteMissionImageRequest = {
  missionId: string
  imageId: string
}

export type DeleteMissionRequest = {
  id: string
}
