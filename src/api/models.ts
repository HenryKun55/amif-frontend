export type User = {
  id: string
  username: string
  creator?: {
    id: string
    username: string
  }
}

export type Address = {
  state?: string
  district?: string
  city?: string
  street?: string
  number?: string
  zipCode?: string
}

export type Event = {
  id: string
  title: string
  description: string
  youtubeUrl?: string
  isMain: boolean
  startDate: string
  startHour: string
  images: {
    id: string
    url: string
  }[]
  subscriptions: {
    id: string
    name: string
    phone: string
    church?: string
    pastorName?: string
    alreadyHeard?: boolean
    howKnow?: string
    createdAt?: Date
  }[]
  canSubscribe: boolean
  createdAt?: string
  isActive: boolean
  creator?: {
    id?: string
    username?: string
  }
  address?: Address
}

export type Mission = {
  id: string
  title: string
  description: string
  youtubeUrl?: string
  startDate: string
  startHour: string
  images: {
    id: string
    url: string
  }[]
  createdAt?: string
  creator?: {
    id?: string
    username?: string
  }
  address?: Address
}

export type Maintainer = {
  id: string
  name: string
  address?: Address
  cpf: string
  phone: string
  donateAmount: number
  donateDate: string
  isActive?: boolean
  createdAt?: string
}
