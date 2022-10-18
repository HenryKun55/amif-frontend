export type PagedRequest = {
  page?: number
  perPage?: number
}

export type Paged<T> = {
  page: number
  total: number
  totalPages: number
  perPage: number
  data: T[]
}
