import React, { Component } from 'react'

import Button from '@material-ui/core/Button'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>AmILegal</h1>
          <Button variant='contained' color='primary'>
            test{' '}
          </Button>
        </header>
      </div>
    )
  }
}
