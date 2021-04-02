import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { SimpleButton2 } from './Button2'

describe('SimpleButton2', () => {
  it('should exist', () => {
    const { getByRole } = render(
      <SimpleButton2 onClick={jest.fn()} count={0} />
    )
    const component = getByRole('simple-button-2')
    expect(component).toBeDefined()
  })

  it('should display the count prop', () => {
    const { getByText } = render(
      <SimpleButton2 onClick={jest.fn()} count={0} />
    )
    expect(getByText(/0/)).toBeInTheDocument()
  })

  it('should run the click function when the button is clicked', () => {
    const mockClick = jest.fn()

    const { getByRole } = render(
      <SimpleButton2 onClick={mockClick} count={0} />
    )
    const btn = getByRole('simple-button-2')

    fireEvent.click(btn)

    expect(mockClick).toHaveBeenCalled()
  })
})
