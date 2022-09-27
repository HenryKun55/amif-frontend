import { Mission } from '@/@types/models'
import { Paged, PagedRequest } from '../types'

export type ListMissionsRequest = PagedRequest

export type ListMissionsResponse = Paged<Mission>

export interface CreateMissionRequest {
  creatorId: string
  title: string
  description: string
  youtubeUrl?: string
  startsAt: string
  imagesUrls: string[]
  address: {
    state: string
    district: string
    city: string
    street: string
    number: string
    zipCode: string
  }
}

export interface CreateMissionResponse {
  missionId: string
}

export interface FindMissionRequest {
  id: string
}

export interface FindMissionResponse {
  id: string
  title: string
  description: string
  youtubeUrl?: string
  startsAt: string
  imagesUrls: string[]
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

export interface UpdateMissionRequest {
  id: string
  title: string
  description: string
  youtubeUrl?: string
  startsAt: string
  imagesUrls: string[]
  address: {
    state: string
    district: string
    city: string
    street: string
    number: string
    zipCode: string
  }
}
