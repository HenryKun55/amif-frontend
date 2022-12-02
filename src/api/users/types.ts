import { UserTable } from '../models'
import { Paged, PagedRequest } from '../types'

export interface UserSortBy {
  username: string
  createdAt: string
}

export type CreateUserRequest = {
  creatorId: string
  username: string
  password: string
}

export type CreateUserResponse = {
  userId: string
}

export type ListUsersRequest = PagedRequest<UserSortBy> & {
  username?: string
  createAt?: string
}

export type ListUsersResponse = Paged<UserTable>
