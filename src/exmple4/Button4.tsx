import React, { VFC, useContext } from 'react'
import { Button, makeStyles, Theme } from '@material-ui/core'
import { Button4Context } from './Button4.context'

export const SimpleButton4: VFC = () => {
  const { onClick, count } = useContext(Button4Context)

  const classes = useSimpleButtonStyles()
  return (
    <Button
      role="simple-button-4"
      onClick={onClick}
      className={classes.container}
    >
      <div>Iv'e been clicked {count} times!</div>
    </Button>
  )
}

const useSimpleButtonStyles = makeStyles((theme: Theme) => ({
  container: { height: 50, width: 200, backgroundColor: 'lightBlue' },
}))
