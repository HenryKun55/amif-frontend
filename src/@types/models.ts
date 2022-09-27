export type User = {
  id: string
  username: string
}

export type Address = {
  id: string
  state: string
  district: string
  city: string
  street: string
  number: string
  zipCode: string
}

export type Subscription = {
  id: string
  name: string
  createdAt?: string
}

export type Event = {
  id: string
  creatorId: string
  addressId: string
  creator?: User
  address?: Address
  title: string
  description: string
  youtubeUrl?: string
  isMain: boolean
  isActive: boolean
  isDeleted: boolean
  startsAt: string
  imagesUrls: string[]
  subscriptions: Subscription[]
  canSubscribe: boolean
  createdAt?: string
}

export type Mission = {
  id: string
  creatorId: string
  addressId: string
  creator?: User
  address?: Address
  title: string
  description: string
  youtubeUrl?: string
  isActive: boolean
  isDeleted: boolean
  startsAt: Date
  imagesUrls: string[]
  createdAt?: Date
}
