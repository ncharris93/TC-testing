import React from 'react'
import './App.css'

import { SimpleButton } from './exmple1/Button'
import { makeStyles, Typography } from '@material-ui/core'
import { SimpleButton2Parent } from './exmple2/Button2'
import { SimpleButton3 } from './exmple3/Button3'

function App() {
  const classes = useStyles()

  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.exampleContainer}>
          <Typography>Example 1</Typography>
          <SimpleButton />
        </div>
        <div className={classes.exampleContainer}>
          <Typography>Example 2</Typography>
          <SimpleButton2Parent />
        </div>
        <div className={classes.exampleContainer}>
          <Typography>Example 3</Typography>
          <SimpleButton3 />
        </div>
      </header>
    </div>
  )
}

const useStyles = makeStyles({
  exampleContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
})

export default App
