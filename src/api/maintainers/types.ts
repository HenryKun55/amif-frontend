import { Maintainer } from '../models'
import { Paged, PagedRequest } from '../types'

export interface MaintainerSortBy {
  id: string
  name: string
  createdAt: string
}

export type FetchMaintainerRequest = {
  id: string
}

export type FetchMaintainerResponse = Maintainer

export type ListMaintainersRequest = PagedRequest<MaintainerSortBy> & {
  name?: string
}

export type ListMaintainersResponse = Paged<Maintainer>

export type CreateMaintainerRequest = {
  name: string
  cpf: string
  phone: string
  donateAmount: number
  donateDay: number
  address: {
    state: string
    district: string
    city: string
    street: string
    number: string
    zipCode: string
  }
}

export type CreateMaintainerResponse = {
  maintainerId: string
}

export type UpdateMaintainerRequest = {
  id: string
  name: string
  cpf: string
  phone: string
  donateAmount: number
  donateDay: number
  address: {
    state: string
    district: string
    city: string
    street: string
    number: string
    zipCode: string
  }
}

export type ActivateMaintainerRequest = {
  id: string
}

export type DeactivateMaintainerRequest = {
  id: string
}

export type DeleteMaintainerRequest = {
  id: string
}

export type CreateMaintainerPaymentRequest = {
  id: string
  paymentDate: string
  amount: number
}

export type CreateMaintainerPaymentResponse = {
  paymentId: string
}
