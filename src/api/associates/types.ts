import { Associate } from '../models'
import { Paged, PagedRequest } from '../types'

export interface AssociateSortBy {
  id: string
  name: string
  phone: string
  createdAt: string
  status: string
  responsible: string
}

export type CreateAssociateRequest = {
  address: {
    state: string
    district: string
    city: string
    street: string
    number: string
    zipCode: string
  }
  indication?: string
  name: string
  email: string
  birthDate: string
  phone: string
  rg: string
  cpf: string
  category?: 'founded_partners' | 'contributing_partner'
  status: 'approved' | 'pending' | 'inactive'
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
export type UpdateAssociateRequest = {
  id: string
  address: {
    state: string
    district: string
    city: string
    street: string
    number: string
    zipCode: string
  }
  indication?: string
  name: string
  email: string
  birthDate: string
  phone: string
  rg: string
  cpf: string
  category?: 'founded_partners' | 'contributing_partner'
  status: 'approved' | 'pending' | 'inactive'
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

export type FetchAssociateRequest = {
  id: string
}

export type FetchAssociateResponse = Associate

export type CreateAssociateResponse = {
  associateId: string
}

export type ListAssociatesRequest = PagedRequest<AssociateSortBy> & {
  name?: string
  createdAt?: string
  status?: string
}

export type ListAssociatesResponse = Paged<Associate>

export type DeleteAssociateRequest = {
  id: string
}
