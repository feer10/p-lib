import { Table, TableColumn } from '@/components/table/Table'

type Data = {
  name: string
  age: number
}

const columns: TableColumn[] = [
  { header: 'Name', accessor: 'name' },
  { header: 'Age', accessor: 'age' },
]

const data: Data[] = [
  { name: 'Test 1', age: 1 },
  { name: 'Test 2', age: 2 },
]

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Data array',
    },
    columns: {
      description: 'Columns array',
    },
    skeletonRowsNumber: {
      description: 'Skeleton rows number',
    },
    onRowClick: {
      description: 'On row click event',
    },
  },
}

export default meta

export const Primary = {
  args: {
    data,
    columns,
  },
}
