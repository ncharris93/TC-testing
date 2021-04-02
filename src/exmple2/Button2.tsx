import React, { VFC, useState } from 'react'
import { Button, makeStyles, Theme } from '@material-ui/core'

export const SimpleButton2Parent = () => {
  const [count, setCount] = useState(0)
  const onClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <SimpleButton2 onClick={onClick} count={count} />
    </div>
  )
}

export const SimpleButton2: VFC<{
  onClick: () => void
  count: number
}> = ({ onClick, count }) => {
  const classes = useSimpleButtonStyles()

  return (
    <Button
      role="simple-button-2"
      onClick={onClick}
      className={classes.container}
    >
      <div>Iv'e been clicked {count} times!</div>
    </Button>
  )
}

const useSimpleButtonStyles = makeStyles((theme: Theme) => ({
  container: { height: 50, width: 200, backgroundColor: 'green' },
}))
