/* eslint-disable react/jsx-key */
import { Row, TableBodyPropGetter, TableBodyProps } from 'react-table'

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
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => (
              <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            ))}
          </tr>
        )
      })}
    </tbody>
  )
}
