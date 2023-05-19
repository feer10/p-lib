import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('should render the button with the provided text', () => {
    const buttonText = 'Click me'
    render(
      <Button className="custom-class" onClick={vi.fn()}>
        {buttonText}
      </Button>
    )
    const button = screen.getByRole('button', { name: buttonText })
    expect(button).toBeInTheDocument()
  })

  it('should apply the provided className to the button', () => {
    const customClass = 'custom-class'
    render(
      <Button className={customClass} onClick={vi.fn()}>
        Click me
      </Button>
    )
    const button = screen.getByRole('button')
    expect(button).toHaveClass(customClass)
  })
})
