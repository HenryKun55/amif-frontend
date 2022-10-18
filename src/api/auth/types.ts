import { User } from '@/@types/models/User'

export type SignInRequest = {
  username: string
  password: string
}

export type SignInResponse = {
  token: string
  user: User
}

export type FetchProfileResponse = User
