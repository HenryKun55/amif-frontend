import { Maintainer } from '../models'
import { Paged, PagedRequest } from '../types'

export interface MaintainerSortBy {
  id: string
  name: string
  createdAt: string
}

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
