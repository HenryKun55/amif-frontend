/* eslint-disable react/jsx-key */
import { Row, TableBodyPropGetter, TableBodyProps } from 'react-table'

import * as S from './styles'

export interface BodyProps<T extends object> {
  getTableBodyProps: (propGetter?: TableBodyPropGetter<T>) => TableBodyProps
  page: Row<T>[]
  prepareRow: (row: Row<T>) => void
}

export const Body = <T extends object>({
  page,
  prepareRow,
  getTableBodyProps,
}: BodyProps<T>) => {
  return (
    <tbody {...getTableBodyProps()}>
      {page.map(row => {
        prepareRow(row)
        return (
          <S.Row {...row.getRowProps()}>
            {row.cells.map(cell => (
              <S.Cell {...cell.getCellProps()}>{cell.render('Cell')}</S.Cell>
            ))}
          </S.Row>
        )
      })}
    </tbody>
  )
}
