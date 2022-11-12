export type User = {
  id: string
  username: string
  creator?: {
    id: string
    username: string
  }
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
  address?: {
    state?: string
    district?: string
    city?: string
    street?: string
    number?: string
    zipCode?: string
  }
}

export type Mission = {
  id: string
  title: string
  description: string
  youtubeUrl?: string
  startsAt: string
  imagesUrls: string[]
  createdAt?: string
  creator?: {
    id?: string
    username?: string
  }
  address?: {
    state?: string
    district?: string
    city?: string
    street?: string
    number?: string
    zipCode?: string
  }
}
