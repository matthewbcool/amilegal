import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import MobileStepper from '@material-ui/core/MobileStepper'
import CardContent from '@material-ui/core/CardContent'
import Input from '@material-ui/core/Input'

import './App.css'

export default class App extends Component {
  state = {
    progressValue: 0,
    activeStep: 0,
    slectedTime: 1200
  }

  render() {
    const stepperData = [
      { question: 'When was your sign-in?', component: <Button>YES</Button> },
      { question: 'Station code you signed in from?' },
      { question: 'Is this an international trip?' },
      { question: 'What kind of international trip is this?' },
      { question: "You're illegal at:" }
    ]

    const handleTimeChange = () => {
      console.log('change the time')
    }
    return (
      <div className='App'>
        <CssBaseline />
        <header className='App-header'>
          <h1>AmILegal</h1>
        </header>
        <LinearProgress
          style={{ height: '30px' }}
          variant='determinate'
          value={this.state.progressValue}
        />
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item xs={12}>
            <Card raised className='questions-card'>
              <h1> {stepperData[this.state.activeStep].question}</h1>
              <CardContent>
                <Input defaultValue={1200} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card raised className='results-card' />
          </Grid>
        </Grid>
        <footer className='footer'>this is the footer</footer>{' '}
      </div>
    )
  }
}
