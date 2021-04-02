import { useState } from 'react'

export const useButtonState = () => {
  const [count, setCount] = useState(0)
  const onClick = () => {
    setCount(count + 1)
  }
  return { count, onClick }
}
