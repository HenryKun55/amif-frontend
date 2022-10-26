/**
 *
 * Table
 *
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableHTMLAttributes, useEffect } from 'react'
import {
  Hooks,
  Row,
  TableOptions,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table'

import { Checkbox } from '../Form/Checkbox'
import { Body } from './Body'
import { Empty } from './Empty'
import { Header } from './Header'
import { Loading } from './Loading'
import { Pagination } from './Pagination'
import * as S from './styles'

export type SortDirection = 'asc' | 'desc'

export interface FetchDataProps<T extends Record<string, unknown>> {
  pageIndex: number
  pageSize: number
  sortBy?: keyof T
  orderBy?: SortDirection
}

export type TableProps<T extends Record<string, unknown>> =
  TableHTMLAttributes<HTMLTableElement> &
  TableOptions<T> & {
    totalPages?: number
    totalCount: number
    onFetchData: (props: FetchDataProps<T>) => void
    pageIndex?: number
    pageSize?: number
    loadingColumns?: number
    isLoading?: boolean
    isSelectable?: boolean
    emptyMessage?: string
    onSelectRow?: (selectedFlatRows: Row<T>[]) => void
  }

export const Table = <T extends Record<string, unknown>>({
  data,
  columns,
  isLoading,
  totalCount,
  emptyMessage,
  isSelectable,
  loadingColumns = 6,
  pageIndex: controlledPageIndex = 0,
  pageSize: controlledPageSize = 15,
  totalPages: controlledPageCount = 1,
  onFetchData,
  onSelectRow,
  ...props
}: TableProps<T>) => {
  const addSelectableColumn = (hooks: Hooks<T>) => {
    hooks.visibleColumns.push(columns => [
      {
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }: any) => (
          <Checkbox
            aria-label="select-all"
            {...getToggleAllRowsSelectedProps()}
          />
        ),
        Cell: ({ row }: any) => (
          <Checkbox {...row.getToggleRowSelectedProps()} />
        ),
      },
      ...columns,
    ])
  }

  const handleHooks = (hooks: Hooks<T>) => {
    if (isSelectable) {
      addSelectableColumn(hooks)
    }
  }

  const {
    gotoPage,
    page,
    prepareRow,
    headerGroups,
    getTableProps,
    selectedFlatRows,
    getTableBodyProps,
    state: { pageIndex, pageSize, sortBy },
  } = useTable<T>(
    {
      data,
      columns,
      manualSortBy: true,
      autoResetPage: false,
      manualPagination: true,
      pageCount: controlledPageCount,
      initialState: {
        pageIndex: controlledPageIndex || 0,
        pageSize: controlledPageSize || 15,
      },
    },
    useSortBy,
    usePagination,
    useRowSelect,
    handleHooks,
  )

  useEffect(() => {
    let sort: keyof T | undefined
    let order: SortDirection | undefined
    if (sortBy && sortBy.length > 0) {
      sort = sortBy[0].id as keyof T
      order = sortBy[0].desc ? 'desc' : 'asc'
    }
    onFetchData({ pageIndex, pageSize, sortBy: sort, orderBy: order })
  }, [onFetchData, pageIndex, pageSize, sortBy])

  useEffect(() => {
    gotoPage(controlledPageIndex - 1)
  }, [controlledPageIndex, gotoPage])

  useEffect(() => {
    onSelectRow && onSelectRow(selectedFlatRows)
  }, [onSelectRow, selectedFlatRows])

  if (isLoading) {
    return <Loading columns={loadingColumns} />
  }
  if (data.length === 0) {
    return <Empty message={emptyMessage || 'Nenhum item foi criado ainda.'} />
  }

  return (
    <div>
      <S.Table {...props} {...getTableProps()}>
        <Header headerGroups={headerGroups} />
        <Body
          page={page}
          prepareRow={prepareRow}
          getTableBodyProps={getTableBodyProps}
        />
      </S.Table>
      <Pagination
        siblingCount={1}
        currentPage={pageIndex + 1}
        totalCount={totalCount}
        pageSize={pageSize}
        next="Próximo"
        previous="Anterior"
        onPageChange={(page: number) => gotoPage(page - 1)}
      />
    </div>
  )
}
