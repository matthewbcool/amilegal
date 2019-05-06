import React, { Component } from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import './App.css'

export default class App extends Component {
  state = {
    progressValue: 0
  }
  render() {
    return (
      <div className='App'>
        <CssBaseline />
        <header className='App-header'>
          <h1>AmILegal</h1>
        </header>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item xs={12}>
            <LinearProgress variant='indeterminate' value={0} />
          </Grid>
          <Grid item xs={12}>
            <Card raised className='questions-card' />
          </Grid>
          <Grid item xs={12}>
            <Card raised className='results-card' />
          </Grid>
        </Grid>
      </div>
    )
  }
}
