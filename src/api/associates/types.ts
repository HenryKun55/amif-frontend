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

export type CreateAssociateResponse = {
  associateId: string
}
