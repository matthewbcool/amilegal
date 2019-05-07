import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import MobileStepper from '@material-ui/core/MobileStepper'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import TimePicker from './TimePicker'
import './App.css'

export default class App extends Component {
  state = {
    progressValue: 0,
    activeStep: 0,
    slectedTime: 1200,
    hour: '00',
    minute: '00'
  }

  componentDidMount() {}
  render() {
    const updateSignIn = event => {
      this.setState({ [event.target.name]: event.target.value })
    }
    const stepperData = [
      {
        question: 'When was your sign-in?',
        component: (
          <div>
            <TimePicker
              updateSignIn={updateSignIn}
              hour={this.state.hour}
              minute={this.state.minute}
            />
            <Button variant='contained' color='primary'>
              Next
            </Button>
          </div>
        )
      },
      {
        question: 'Station code you signed in from?',
        component: (
          <div>
            <TimePicker
              updateSignIn={updateSignIn}
              hour={this.state.hour}
              minute={this.state.minute}
            />
            <Button variant='contained' color='primary'>
              Next
            </Button>
          </div>
        )
      },
      {
        question: 'Is this an international trip?',
        component: (
          <div>
            <TimePicker
              updateSignIn={updateSignIn}
              hour={this.state.hour}
              minute={this.state.minute}
            />
            <Button variant='contained' color='primary'>
              Next
            </Button>
          </div>
        )
      },
      {
        question: 'What kind of international trip is this?',
        component: (
          <div>
            <TimePicker
              updateSignIn={updateSignIn}
              hour={this.state.hour}
              minute={this.state.minute}
            />
            <Button variant='contained' color='primary'>
              Next
            </Button>
          </div>
        )
      },
      { question: "You're illegal at:" }
    ]

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
                {stepperData[this.state.activeStep].component}
              </CardContent>
              <div className='card-actions'>
                <IconButton
                  onClick={() => {
                    console.log('step back')
                  }}
                  color='primary'
                  aria-label='go back'>
                  <ArrowBackIos />
                </IconButton>
                <IconButton
                  onClick={() => {
                    console.log('step forward')
                  }}
                  color='primary'
                  aria-label='go back'>
                  <ArrowForwardIos />
                </IconButton>
              </div>
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
