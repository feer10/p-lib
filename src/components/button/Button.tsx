import { FC, ReactNode } from 'react'
import './Button.scss'

export interface ButtonProps {
  children: string | JSX.Element | JSX.Element[] | ReactNode
  className?: string
  testId?: string
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, onClick, className, testId }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick} data-testid={testId}>
      {children}
    </button>
  )
}
