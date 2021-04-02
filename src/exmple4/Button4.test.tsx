import React, { FC } from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import { SimpleButton4 } from './Button4'
import { Button4ContextProvider } from './Button4.context'

const wrapper: FC = ({ children }) => {
  return <Button4ContextProvider>{children}</Button4ContextProvider>
}
describe('SimpleButton4 - context', () => {
  beforeEach(() => {
    render(<SimpleButton4 />, { wrapper: wrapper })
  })

  it('should display the count prop', () => {
    expect(screen.getByText(/0/)).toBeInTheDocument()
  })

  it('should run the click function when the button is clicked', () => {
    const btn = screen.getByRole('simple-button-4')

    fireEvent.click(btn)

    expect(screen.getByText(/1/)).toBeInTheDocument()
  })
})
