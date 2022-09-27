import { User } from '@/@types/models'

export type SignInRequest = {
  username: string
  password: string
}

export type SignInResponse = {
  token: string
  user: User
}
