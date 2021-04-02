import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { SimpleButton } from './Button'

describe('SimpleButton', () => {
  it('should exist', () => {
    const { getByRole } = render(<SimpleButton />)
    const component = getByRole('simple-button')
    expect(component).toBeDefined()
  })

  it('should default show that it has been clicked 0 times', () => {
    const { getByText } = render(<SimpleButton />)
    expect(getByText(/0/)).toBeInTheDocument()
  })

  it('should increment the counter when clicked', () => {
    const { getByRole, getByText } = render(<SimpleButton />)
    const btn = getByRole('simple-button')

    fireEvent.click(btn)

    expect(getByText(/1/)).toBeInTheDocument()
  })
})
