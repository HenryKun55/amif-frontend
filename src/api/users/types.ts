import { UserTable } from '../models'
import { Paged, PagedRequest } from '../types'

export interface UserSortBy {
  username: string
  createdAt: string
}

export type FetchUserRequest = {
  id: string
}

export type FetchUserResponse = UserTable

export type CreateUserRequest = {
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

export type DeleteUserRequest = {
  id: string
}

export type UpdateUserRequest = {
  id: string
  username: string
  password: string
}
