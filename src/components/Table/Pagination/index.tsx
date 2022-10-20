/**
 *
 * Table Pagination
 *
 */

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { LEFT_DOTS, RIGHT_DOTS, usePagination } from '@/hooks/usePagination'

import * as S from './styles'

export interface PaginationProps {
  currentPage: number
  totalCount: number
  pageSize: number
  siblingCount?: number
  next?: string
  previous?: string
  left?: string
  onPageChange?: (index: number) => void
}

export const Pagination = ({
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 1,
  next = 'Next',
  previous = 'Previous',
  left,
  onPageChange,
}: PaginationProps) => {
  const pages = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })
  const totalPageCount = Math.ceil(totalCount / pageSize)

  const handleNext = () => {
    onPageChange?.(currentPage + 1)
  }

  const handlePrevious = () => {
    onPageChange?.(currentPage - 1)
  }

  if (currentPage === 0 || pages.length < 2) {
    return null
  }

  return (
    <S.Container>
      <S.ShowingText>{left}</S.ShowingText>
      <S.List>
        <S.Controls active={currentPage > 1} onClick={handlePrevious}>
          <MdKeyboardArrowLeft size={18} />
          <S.ControlsText>{previous}</S.ControlsText>
        </S.Controls>
        {pages?.map(pageNumber => {
          if (pageNumber === LEFT_DOTS || pageNumber === RIGHT_DOTS) {
            return <S.Elipsis key={pageNumber}>...</S.Elipsis>
          }
          return (
            <li key={pageNumber}>
              <S.Button
                active={pageNumber === currentPage}
                onClick={() => onPageChange?.(pageNumber)}
              >
                {pageNumber}
              </S.Button>
            </li>
          )
        })}
        <S.Controls active={currentPage < totalPageCount} onClick={handleNext}>
          <S.ControlsText>{next}</S.ControlsText>
          <MdKeyboardArrowRight size={18} />
        </S.Controls>
      </S.List>
    </S.Container>
  )
}
