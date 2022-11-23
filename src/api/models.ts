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
  address?: {
    state?: string
    district?: string
    city?: string
    street?: string
    number?: string
    zipCode?: string
  }
}

export type Associate = {
  address: {
    state: string
    district: string
    city: string
    street: string
    number: string
    zipCode: string
  }
  id: string
  indication?: string
  name: string
  email: string
  birthDate: string
  phone: string
  rg: string
  cpf: string
  category?: 'founded_partners' | 'contributing_partner'
  ecclesiastical?: {
    church?: string
    admissionDate?: string
    position?: string
  }
  education?: {
    level?: string
    background?: string
    hasTheologyBackground?: boolean
    language?: string
  }
}
