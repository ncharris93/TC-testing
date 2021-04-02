import React from 'react'
import logo from './logo.svg'
import './App.css'
import { SimpleButton } from './exmple1/Button'
import { Typography } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography>Example 1</Typography>
        <SimpleButton />
      </header>
    </div>
  )
}

export default App
