import { FC, ReactNode } from 'react'
import './Button.scss'

export interface ButtonProps {
  children: string | JSX.Element | JSX.Element[] | ReactNode
  className?: string
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
