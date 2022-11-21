import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

type UsePagePagination = {
  initialPage?: number
  route: string
  title: string
}

export function usePagePagination({
  route,
  title,
  initialPage = 1,
}: UsePagePagination) {
  const location = useLocation()
  const [page, setPage] = useState(initialPage)

  useEffect(() => {
    window.history.replaceState(null, title, `${route}?page=${page}`)
  }, [page])

  useEffect(() => {
    const query = new URLSearchParams(location.search)
    const pageParam = query.get('page')
    if (pageParam) {
      setPage(Number(pageParam))
    }
  }, [location.search])

  return { page, setPage }
}
