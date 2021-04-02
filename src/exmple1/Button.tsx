import React, { VFC, useState } from 'react'
import { Button, makeStyles, Theme } from '@material-ui/core'

export const SimpleButton: VFC = () => {
  const classes = useSimpleButtonStyles()
  const [count, setCount] = useState(0)

  const incrementClick = () => {
    setCount(count + 1)
  }

  return (
    <Button
      role="simple-button"
      onClick={incrementClick}
      className={classes.container}
    >
      <div>Iv'e been clicked {count} times!</div>
    </Button>
  )
}

const useSimpleButtonStyles = makeStyles((theme: Theme) => ({
  container: { height: 50, width: 200, backgroundColor: 'red' },
}))
