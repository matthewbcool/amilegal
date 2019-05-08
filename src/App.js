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
import AirplanemodeActive from '@material-ui/icons/AirplanemodeActive'
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
    tripTypeDescription: '',
    flyingHours: '',
    flyingMinutes: '',
    displaySignIn: '',
    displayStation: '',
    displayDoorClose: '',
    onDutyMax: 15
  }

  render() {
    const handleChange = event => {
      this.setState({ [event.target.name]: event.target.value })
      if (event.target.name === 'intTripType') {
        this.setState({ tripTypeDescription: '' })
      }
    }

    const getSignIn = () => {
      stepForward()
      let signIn = parseInt(this.state.hour)

      // use day.js to parse display times, then set state

      if (signIn > 4 && signIn < 17) {
        this.setState({ onDutyMax: 15 })
      } else if (signIn > 16 && signIn < 23) {
        this.setState({ onDutyMax: 13 })
      } else if ((signIn => 23 && signIn < 26) || signIn < 5) {
        this.setState({ onDutyMax: 12 })
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

    const stepForward = () => {
      this.setState({ activeStep: this.state.activeStep + 1 })
      this.setState({ progressValue: this.state.progressValue + 20 })
    }

    const checkForProgressCompletion = () => {
      if (this.state.activeStep === 4) {
        this.setState({
          progressValue: 100
        })
      }
    }
    const stepperData = [
      {
        question: 'When was your sign-in?',
        component: (
          <div className='dynamic-component-wrapper'>
            <TimePicker
              handleChange={handleChange}
              hour={this.state.hour}
              minute={this.state.minute}
            />
            <Button
              variant='contained'
              color='primary'
              size='large'
              onClick={getSignIn}>
              Next
            </Button>
          </div>
        )
      },
      {
        question: 'Station code you signed in from?',
        component: (
          <div className='dynamic-component-wrapper'>
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
        question: 'What is the scheduled flying time of your flight?',
        component: (
          <div className='dynamic-component-wrapper'>
            <Select
              value={this.state.flyingHours}
              onChange={handleChange}
              inputProps={{
                name: 'flyingHours',
                id: 'flyingHours'
              }}>
              <MenuItem value=''>
                <em>Hours</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13</MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={16}>16</MenuItem>
            </Select>

            <Select
              value={this.state.flyingMinutes}
              onChange={handleChange}
              inputProps={{
                name: 'flyingMinutes',
                id: 'flyingMinutes'
              }}>
              <MenuItem value=''>
                <em>Hours</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13</MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={17}>17</MenuItem>
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={19}>19</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={21}>21</MenuItem>
              <MenuItem value={22}>22</MenuItem>
              <MenuItem value={23}>23</MenuItem>
              <MenuItem value={24}>24</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={26}>26</MenuItem>
              <MenuItem value={27}>27</MenuItem>
              <MenuItem value={28}>28</MenuItem>
              <MenuItem value={29}>29</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={31}>31</MenuItem>
              <MenuItem value={32}>32</MenuItem>
              <MenuItem value={33}>33</MenuItem>
              <MenuItem value={34}>34</MenuItem>
              <MenuItem value={35}>35</MenuItem>
              <MenuItem value={36}>36</MenuItem>
              <MenuItem value={37}>37</MenuItem>
              <MenuItem value={38}>38</MenuItem>
              <MenuItem value={39}>39</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={41}>41</MenuItem>
              <MenuItem value={42}>42</MenuItem>
              <MenuItem value={43}>43</MenuItem>
              <MenuItem value={44}>44</MenuItem>
              <MenuItem value={45}>45</MenuItem>
              <MenuItem value={46}>46</MenuItem>
              <MenuItem value={47}>47</MenuItem>
              <MenuItem value={48}>48</MenuItem>
              <MenuItem value={49}>49</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={51}>51</MenuItem>
              <MenuItem value={52}>52</MenuItem>
              <MenuItem value={53}>53</MenuItem>
              <MenuItem value={54}>54</MenuItem>
              <MenuItem value={55}>55</MenuItem>
              <MenuItem value={56}>56</MenuItem>
              <MenuItem value={57}>57</MenuItem>
              <MenuItem value={58}>58</MenuItem>
              <MenuItem value={59}>59</MenuItem>
            </Select>

            <Button variant='contained' color='primary'>
              Next
            </Button>
          </div>
        )
      },
      {
        question: 'Is this an international trip?',
        component: (
          <div className='dynamic-component-wrapper'>
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
          <div className='dynamic-component-wrapper'>
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
          style={{ height: '25px' }}
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
            <Card raised className='results-card'>
              <h5>Sign In: {this.state.displaySignIn}</h5>
            </Card>
          </Grid>
        </Grid>
        <footer className='footer'>this is the footer</footer>{' '}
      </div>
    )
  }
}
