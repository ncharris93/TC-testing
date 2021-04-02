import React, { FC, useState } from 'react'

export const Button4Context = React.createContext<{
  count: number
  onClick: () => void
}>({
  count: 0,
  onClick: () => {},
})

export const Button4ContextProvider: FC = ({ children }) => {
  const [count, setCount] = useState(0)
  const onClick = () => {
    setCount(count + 1)
  }

  return (
    <Button4Context.Provider value={{ count, onClick }}>
      {children}
    </Button4Context.Provider>
  )
}
