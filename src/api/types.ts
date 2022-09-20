export type PaginatedRequest = {
  page?: number
  per_page?: number
}

export type Paginated<T> = {
  data: T[]
  current_page: number
  last_page: number
}
