import { FC } from 'react'
import './Table.scss'

export interface TableProps {
  data: any[]
  columns: TableColumn[]
  skeletonRowsNumber?: number
  onRowClick?: (item: any) => void
}

export interface TableColumn {
  header: string
  accessor: string
}

export const Table: FC<TableProps> = ({ data, columns, skeletonRowsNumber, onRowClick }) => (
  <table className="custom-table">
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.header}>{column.header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.length === 0 && skeletonRowsNumber
        ? Array.from({ length: skeletonRowsNumber }, (_, index: number) => (
            <tr className="skeleton-row" key={index}>
              <td colSpan={columns.length}></td>
            </tr>
          ))
        : data.map((item, index) => (
            <tr key={index} onClick={() => onRowClick?.(item)}>
              {columns.map((column, index) => (
                <td key={index}>{item[column.accessor]}</td>
              ))}
            </tr>
          ))}
    </tbody>
  </table>
)
