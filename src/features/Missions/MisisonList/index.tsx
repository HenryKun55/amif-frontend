/**
 *
 * Mission List
 *
 */

import { useListMissionsQuery } from '@/api/missions'
import { Pagination } from '@/components/Table/Pagination'
import { usePagePagination } from '@/hooks/usePagePagination'
import { Routes } from '@/routes/routes'

import * as S from './styles'

const PER_PAGE = 12

export const MissionList = () => {
  const { page, setPage } = usePagePagination({
    title: 'Missões',
    route: Routes.Missoes,
  })
  const { data, isLoading } = useListMissionsQuery({
    page,
    active: true,
    perPage: PER_PAGE,
  })

  const handlePageChange = (pageIndex: number) => {
    if (!data) return
    if (pageIndex > 0 && pageIndex <= data.totalPages) {
      setPage(pageIndex)
    }
  }

  return (
    <S.Container>
      {isLoading && <div>Carregando...</div>}
      <S.CardsContainer>
        {data?.data.map(mission => (
          <S.CardMission key={mission.id} mission={mission} />
        ))}
      </S.CardsContainer>
      {!isLoading && (
        <S.PaginationWrapper>
          <Pagination
            siblingCount={1}
            currentPage={page}
            totalCount={data?.total || 0}
            pageSize={PER_PAGE}
            next="Próximo"
            previous="Anterior"
            onPageChange={handlePageChange}
          />
        </S.PaginationWrapper>
      )}
    </S.Container>
  )
}
