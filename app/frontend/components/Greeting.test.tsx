import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { Greeting } from './Greeting'

it('counts clicks', async () => {
  render(<Greeting name="Ada" />)

  await userEvent.setup().click(screen.getByRole('button'))

  expect(screen.getByText('Hello, Ada!')).toBeInTheDocument()
  expect(screen.getByRole('button')).toHaveTextContent('Clicked 1 time')
})
