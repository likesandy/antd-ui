import { render, screen } from '@testing-library/react'
import { Button } from '.'

test('render Button', () => {
  render(<Button>Click me</Button>)
  const linkElement = screen.getByText(/Click me/i)
  expect(linkElement).toBeInTheDocument()
})

