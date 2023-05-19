import { render, screen } from '@testing-library/react'
import { Table, TableColumn, TableProps } from './Table'

type Data = {
  name: string
  age: number
}

describe('Table', () => {
  const columns: TableColumn[] = [
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
  ]

  const data: Data[] = [
    { name: 'Test 1', age: 1 },
    { name: 'Test 2', age: 2 },
  ]

  const onRowClick = vi.fn()

  const renderTable = (props: Partial<TableProps> = {}) => {
    const defaultProps: TableProps = {
      data,
      columns,
      onRowClick,
      ...props,
    }

    render(<Table {...defaultProps} />)
  }

  it('renders table correctly', () => {
    renderTable()

    const headerElements = screen.getAllByRole('columnheader')
    expect(headerElements).toHaveLength(columns.length)

    const rowElements = screen.getAllByRole('row')
    expect(rowElements).toHaveLength(data.length + 1)

    data.forEach((item, rowIndex) => {
      const cells = rowElements[rowIndex + 1].querySelectorAll('td')
      expect(cells).toHaveLength(columns.length)

      columns.forEach((column, columnIndex) => {
        expect(cells[columnIndex]).toHaveTextContent(String(item[column.accessor as keyof Data]))
      })
    })

    columns.forEach((column, index) => {
      expect(headerElements[index]).toHaveTextContent(column.header)
    })
  })

  it('onRowClick callback when a row is clicked', () => {
    renderTable()

    const rowElements = screen.getAllByRole('row')
    rowElements.forEach((rowElement, rowIndex) => {
      if (rowIndex > 0) {
        rowElement.click()
        expect(onRowClick).toHaveBeenCalledWith(data[rowIndex - 1])
      }
    })
  })
})
