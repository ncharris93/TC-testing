import React, { VFC, useState } from 'react'
import { Button, makeStyles, Theme } from '@material-ui/core'
import { useButtonState } from './useButton3'

export const SimpleButton3: VFC = () => {
  const classes = SimpleButtonStyles()
  const { count, onClick } = useButtonState()

  return (
    <Button
      role="simple-button-3"
      onClick={onClick}
      className={classes.container}
    >
      <div>Iv'e been clicked {count} times!</div>
    </Button>
  )
}

const SimpleButtonStyles = makeStyles((theme: Theme) => ({
  container: { height: 50, width: 200, backgroundColor: 'yellow' },
}))
