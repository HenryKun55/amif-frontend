export type PagedRequest = {
  page?: number
  perPage?: number
}

export type Paged<T> = {
  data: T[]
  page: number
  total: number
  perPage: number
  totalPages: number
}
