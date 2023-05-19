import { Button } from '@/components/button/Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Custom Children',
    },
    className: {
      description: 'Custom className',
    },
    testId: {
      description: 'Custom data-testid',
    },
    onClick: {
      description: 'onClick event',
    },
  },
}

export default meta

export const Primary = {
  args: {
    children: 'Button',
  },
}
