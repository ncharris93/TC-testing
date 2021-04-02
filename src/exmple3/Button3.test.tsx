import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import _ from 'lodash'

import { SimpleButton3 } from './Button3'

const mockClick = jest.fn()
jest.mock('./useButton3.ts', () => ({
  useButtonState: () => ({
    onClick: mockClick,
    count: 0,
  }),
}))

describe('SimpleButton3', () => {
  it('should exist', () => {
    const { getByRole } = render(<SimpleButton3 />)
    const component = getByRole('simple-button-3')
    expect(component).toBeDefined()
  })

  it('should display the count prop', () => {
    const { getByText } = render(<SimpleButton3 />)
    expect(getByText(/0/)).toBeInTheDocument()
  })

  it('should run the click function when the button is clicked', () => {
    const { getByRole } = render(<SimpleButton3 />)
    const btn = getByRole('simple-button-3')

    fireEvent.click(btn)

    expect(mockClick).toHaveBeenCalled()
  })
})
