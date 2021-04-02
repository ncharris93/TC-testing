import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import _ from 'lodash'

import { useButtonState } from './useButton3'

describe('useButtonState', () => {
  it('should reutrn an object', () => {
    const { result } = renderHook(() => useButtonState())
    expect(_.isObject(result.current)).toBeTruthy()
  })
  it('should retun count as 0 and onCLick as a function', () => {
    const { result } = renderHook(() => useButtonState())

    expect(result.current.count).toBe(0)
    expect(_.isFunction(result.current.onClick)).toBeTruthy()
  })
  it('should increment the count when onClick is called', () => {
    const { result } = renderHook(() => useButtonState())

    act(() => {
      result.current.onClick()
    })

    expect(result.current.count).toBe(1)
  })
})
