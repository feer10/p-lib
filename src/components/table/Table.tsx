import { FC } from 'react'
import './Table.scss'

export interface TableProps {
  data: any[]
  columns: TableColumn[]
  onRowClick?: (item: any) => void
}

export interface TableColumn {
  header: string
  accessor: string
}

export const Table: FC<TableProps> = ({ data, columns, onRowClick }) => (
  <table className="custom-table">
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.header}>{column.header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index} onClick={() => onRowClick?.(item)}>
          {columns.map((column, index) => (
            <td key={index}>{item[column.accessor]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)
