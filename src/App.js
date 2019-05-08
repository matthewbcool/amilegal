import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TimePicker from './TimePicker'
import './App.css'

export default class App extends Component {
  state = {
    progressValue: 0,
    activeStep: 0,
    slectedTime: 1200,
    hour: '00',
    minute: '00',
    stationOrigin: '',
    intTripType: '',
    tripTypeDescription: ''
  }

  render() {
    const handleChange = event => {
      this.setState({ [event.target.name]: event.target.value })
      if (event.target.name === 'intTripType') {
        this.setState({ tripTypeDescription: '' })
      }
    }

    const displayDescription = () => {
      if (this.state.intTripType === 'NON_LONG_RANGE') {
        this.setState({
          tripTypeDescription:
            'A duty period with any mix international or international and domestic segments'
        })
      } else if (this.state.intTripType === 'MID_RANGE') {
        this.setState({
          tripTypeDescription:
            'A duty period including one domestic and one IPD, or a one day turn (2 NIPDs) or two NIPD segments'
        })
      } else if (this.state.intTripType === 'LONG_RANGE') {
        this.setState({
          tripTypeDescription:
            'A flight leg over 12 hours but not more than 14.15'
        })
      } else if (this.state.intTripType === 'EXTEND_LONG_RANGE') {
        this.setState({
          tripTypeDescription: 'A duty period with above 14.15 sceduled flying'
        })
      }
    }

    const checkForProgressCompletion = () => {
      if (this.state.activeStep === 3) {
        this.setState({
          progressValue: 100
        })
      }
    }
    const stepperData = [
      {
        question: 'When was your sign-in?',
        component: (
          <div>
            <TimePicker
              handleChange={handleChange}
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
            <TextField
              id='station-orgin'
              name='stationOrigin'
              label='Station Code'
              value={this.state.stationOrigin}
              onChange={handleChange}
              margin='normal'
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
            <Button variant='contained' color='primary'>
              Yes
            </Button>
            <Button variant='contained' color='secondary'>
              No
            </Button>
          </div>
        )
      },
      {
        question: 'What kind of international trip is this?',
        component: (
          <div>
            <Select
              value={this.state.intTripType}
              onChange={handleChange}
              inputProps={{
                name: 'intTripType',
                id: 'int-trip-type'
              }}>
              <MenuItem value=''>
                <em>Choose one for description</em>
              </MenuItem>
              <MenuItem value={'NON_LONG_RANGE'}>Non-Long Range</MenuItem>
              <MenuItem value={'MID_RANGE'}>Mid-Range</MenuItem>
              <MenuItem value={'LONG_RANGE'}>Long Range</MenuItem>
              <MenuItem value={'EXTEND_LONG_RANGE'}>
                Extended Long-Range
              </MenuItem>
            </Select>
            <Button variant='contained' color='primary'>
              Next
            </Button>
            <Button
              onClick={displayDescription}
              variant='outlined'
              color='secondary'>
              Description
            </Button>
            <h3>{this.state.tripTypeDescription} </h3>
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
                    this.setState({ activeStep: this.state.activeStep - 1 })
                    this.setState({
                      progressValue: this.state.progressValue - 20
                    })
                  }}
                  color='primary'
                  aria-label='go back'>
                  <ArrowBackIos />
                </IconButton>
                <IconButton
                  onClick={() => {
                    this.setState({ activeStep: this.state.activeStep + 1 })
                    this.setState({
                      progressValue: this.state.progressValue + 20
                    })
                    checkForProgressCompletion()
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
