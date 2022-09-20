import { User } from '@/@types/models/User'

export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  access_token: string
  token_type: string
  expires_in: number
  user: User
}
