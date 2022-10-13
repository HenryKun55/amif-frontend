/* eslint-disable react/jsx-key */
import React from 'react'
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
  MdOutlineArrowRight,
} from 'react-icons/md'
import { HeaderGroup } from 'react-table'

import * as S from './styles'

export interface HeaderProps<T extends object> {
  headerGroups: HeaderGroup<T>[]
}

export const Header = <T extends object>({ headerGroups }: HeaderProps<T>) => {
  const sortIcon = (column: HeaderGroup<T>) => {
    if (!column.isSorted) {
      return <MdOutlineArrowRight />
    }
    return column.isSortedDesc ? (
      <MdOutlineArrowDropUp />
    ) : (
      <MdOutlineArrowDropDown />
    )
  }

  return (
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column =>
            column.Header ? (
              <td
                {...column.getHeaderProps(
                  column.defaultCanSort
                    ? column.getSortByToggleProps()
                    : undefined,
                )}
              >
                <>
                  {column.defaultCanSort ? (
                    <S.HeaderButton>
                      {column.render('Header')}
                      <span>{sortIcon(column)}</span>
                    </S.HeaderButton>
                  ) : (
                    column.render('Header')
                  )}
                </>
              </td>
            ) : null,
          )}
        </tr>
      ))}
    </thead>
  )
}
