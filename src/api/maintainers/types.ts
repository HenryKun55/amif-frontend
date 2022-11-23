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
