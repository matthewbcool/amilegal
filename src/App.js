import React, { Component } from 'react'
import {
  Button,
  Card,
  CssBaseline,
  Grid,
  LinearProgress,
  Fade,
  CardContent,
  IconButton,
  TextField,
  Select,
  MenuItem
} from '@material-ui/core/'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import TimePick from './TimePick'
import dayjs from 'dayjs'
import InfoDialog from './InfoDialog'
import './App.css'

export default class App extends Component {
  state = {
    progressValue: 0,
    activeStep: 0,
    slectedTime: 1200,
    hour: '',
    minute: '',
    dayJsSignIn: '',
    stationOrigin: '',
    intTripType: '',
    tripTypeDescription: '',
    flyingHours: '',
    flyingMinutes: '',
    displaySignIn: '',
    displayStation: '',
    displayFlyingTime: '',
    displayDoorClose: '',
    displayInt: '',
    onDutyMax: 15,
    errorMsg: '',
    internationalDebrief: false,
    legalityTime: ''
  }

  render() {
    const handleChange = event => {
      this.setState({ [event.target.name]: event.target.value })
      this.setState({ legalityTime: '' })
      if (event.target.name === 'intTripType') {
        this.setState({ tripTypeDescription: '' })
        clearErrorMsg()
      }
    }

    const getSignIn = () => {
      if (this.state.dayJsSignIn === '') {
        this.setState({ errorMsg: 'Please enter a valid time' })
      } else {
        stepForward()
        const signIn = parseInt(this.state.hour)
        setDutyMax(signIn)
        setDisplaySignIn()
        clearErrorMsg()
      }
    }

    const setDayJsSignIn = selectedTime => {
      this.setState({ dayJsSignIn: selectedTime })
    }

    const setDisplaySignIn = () => {
      let displaySignIn = this.state.dayJsSignIn.format('HHmm')
      this.setState({ displaySignIn: displaySignIn })
    }

    const getStationCode = () => {
      if (this.state.stationOrigin.length !== 3) {
        this.setState({ errorMsg: 'Please enter a three letter station code' })
      } else {
        stepForward()
        this.setState({ displayStation: this.state.stationOrigin })
        clearErrorMsg()
      }
    }
    const getFlyingTime = () => {
      if (this.state.flyingMinutes === '' || this.state.flyingHours === '') {
        this.setState({ errorMsg: 'Please enter a valid flying time' })
      } else {
        stepForward()
        this.setState({
          displayFlyingTime: `${this.state.flyingHours} hours ${
            this.state.flyingMinutes
          } minutes`
        })
        clearErrorMsg()
      }
    }
    const isInternational = event => {
      if (event.target.name === 'yes' || event.target.innerHTML === 'Yes') {
        this.setState({ activeStep: this.state.activeStep + 1 })
        this.setState({ progressValue: this.state.progressValue + 20 })
        this.setState({ internationalDebrief: true })
        this.setState({ displayInt: 'Yes' })
      } else {
        this.setState({ activeStep: this.state.activeStep + 2 })
        this.setState({ progressValue: this.state.progressValue + 40 })
        this.setState({ displayInt: 'No' })
      }
    }
    const getTripType = () => {
      if (this.state.intTripType === '') {
        this.setState({
          errorMsg:
            'Please select a trip type, use the description button for explainations'
        })
      } else {
        stepForward()
        clearErrorMsg()
        setIntDutyDay()
      }
    }
    const calulateLegality = () => {
      const signInObj = this.state.dayJsSignIn
      let signInPlusDuty = signInObj.add(this.state.onDutyMax, 'hour')
      if (this.state.internationalDebrief === true) {
        signInPlusDuty = signInPlusDuty.subtract(30, 'minute')
      } else {
        signInPlusDuty = signInPlusDuty.subtract(15, 'minute')
      }
      signInPlusDuty = signInPlusDuty
        .subtract(this.state.flyingHours, 'hour')
        .subtract(this.state.flyingMinutes, 'minute')
      this.setState({ legalityTime: signInPlusDuty.format('HHmm') })
    }
    const setDutyMax = signIn => {
      if (signIn > 4 && signIn < 17) {
        this.setState({ onDutyMax: 15 })
      } else if (signIn > 16 && signIn < 23) {
        this.setState({ onDutyMax: 13 })
      } else if ((signIn => 23 && signIn < 26) || signIn < 5) {
        this.setState({ onDutyMax: 12 })
      }
    }
    const setIntDutyDay = () => {
      if (this.state.intTripType === 'NON_LONG_RANGE') {
        this.setState({ onDutyMax: 16 })
      } else if (this.state.intTripType === 'MID_RANGE') {
        this.setState({ onDutyMax: 17 })
      } else if (this.state.intTripType === 'LONG_RANGE') {
        this.setState({ onDutyMax: 18 })
      } else if (this.state.intTripType === 'EXTEND_LONG_RANGE') {
        this.setState({ onDutyMax: 19 })
      } else {
        console.log('nothing set')
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

    const clearErrorMsg = () => {
      this.setState({ errorMsg: '' })
    }

    const stepForward = () => {
      this.setState({ activeStep: this.state.activeStep + 1 })
      this.setState({ progressValue: this.state.progressValue + 20 })
    }

    const stepperData = [
      {
        question: 'When was your sign-in?',
        component: (
          <div className='dynamic-component-wrapper'>
            <TimePick setSignIn={setDayJsSignIn} />
            <h5>{this.state.errorMsg}</h5>
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
              size='large'
              value={this.state.stationOrigin}
              onChange={handleChange}
              margin='normal'
            />
            <h5>{this.state.errorMsg}</h5>
            <Button
              onClick={getStationCode}
              variant='contained'
              size='large'
              color='primary'>
              Next
            </Button>
          </div>
        )
      },
      {
        question: 'Scheduled flying time of your last leg?',
        component: (
          <div className='dynamic-component-wrapper'>
            <div className='flying-time-wrapper'>
              <div className='hours-flying-wrapper'>
                <Select
                  style={{
                    width: '80px',
                    fontSize: '2rem'
                  }}
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
                <h5>Hours</h5>
              </div>
              <div className='minutes-flying-wrapper'>
                <Select
                  style={{
                    width: '80px',
                    fontSize: '2rem'
                  }}
                  value={this.state.flyingMinutes}
                  onChange={handleChange}
                  inputProps={{
                    name: 'flyingMinutes',
                    id: 'flyingMinutes'
                  }}>
                  <MenuItem value=''>
                    <em>Minutes</em>
                  </MenuItem>
                  <MenuItem value={0}>0</MenuItem>
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
                <h5>Minutes</h5>
              </div>
            </div>
            <h5>{this.state.errorMsg}</h5>
            <Button
              onClick={getFlyingTime}
              variant='contained'
              color='primary'
              size='large'>
              Next
            </Button>
          </div>
        )
      },
      {
        question: 'Is this an international trip?',
        component: (
          <div className='dynamic-component-wrapper'>
            <Button
              onClick={isInternational}
              name='yes'
              variant='contained'
              size='large'
              color='primary'>
              Yes
            </Button>
            <Button
              onClick={isInternational}
              name='no'
              size='large'
              variant='contained'
              color='secondary'>
              No
            </Button>
          </div>
        )
      },
      {
        question: 'What kind of international trip is this?',
        component: (
          <div className='dynamic-component-wrapper'>
            <div className='int-type-wrapper'>
              <h5>{this.state.errorMsg}</h5>
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
              <Button
                style={{ margin: '5px 0px 0px 0px' }}
                onClick={displayDescription}
                variant='outlined'
                size='large'
                color='secondary'>
                Description
              </Button>
              <Button
                onClick={getTripType}
                style={{ margin: '15px 0px 0px 0px' }}
                variant='contained'
                size='large'
                color='primary'>
                Next
              </Button>

              <h3>{this.state.tripTypeDescription} </h3>
            </div>
          </div>
        )
      },
      {
        question: 'Ready to depart with door closed ',
        component: (
          <div className='dynamic-component-wrapper'>
            <div>
              <Button
                onClick={calulateLegality}
                variant='contained'
                color='primary'>
                Reveal Legality
              </Button>

              <Fade in={this.state.legalityTime !== ''}>
                <h1>{`${this.state.legalityTime} ${
                  this.state.stationOrigin
                } time`}</h1>
              </Fade>
            </div>
          </div>
        )
      }
    ]

    return (
      <div className='App'>
        <CssBaseline />
        <header className='App-header'>
          <h1 className='main-title'>AmILegal</h1>
          <IconButton
            style={{ margin: '0px 0px 10px 0px' }}
            onClick={() => {
              if (this.state.activeStep === 0) {
              } else if (
                this.state.activeStep === 5 &&
                !this.state.isInternational
              ) {
                this.setState({ activeStep: this.state.activeStep - 2 })
                this.setState({ progressValue: this.state.progressValue - 40 })
              } else {
                this.setState({ activeStep: this.state.activeStep - 1 })
                this.setState({
                  progressValue: this.state.progressValue - 20
                })
              }
            }}
            color='primary'
            aria-label='go back'>
            <ArrowBackIos />
          </IconButton>
        </header>
        <LinearProgress
          style={{ height: '25px' }}
          variant='determinate'
          value={this.state.progressValue}
        />
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item xs={12}>
            <Card raised className='questions-card'>
              <CardContent>
                <h1 style={{ margin: '15px 0px 0px 0px' }}>
                  {stepperData[this.state.activeStep].question}
                </h1>
                {stepperData[this.state.activeStep].component}
              </CardContent>
              <div className='card-actions' />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card raised className='results-card'>
              <div className='display-wrap'>
                <p>Sign In:</p> <h5>{this.state.displaySignIn}</h5>
              </div>
              <div className='display-wrap'>
                <p>Origin Station:</p> <h5>{this.state.displayStation}</h5>
              </div>
              <div className='display-wrap'>
                <p>Next Flying Time:</p> <h5>{this.state.displayFlyingTime}</h5>
              </div>
              <div className='display-wrap'>
                <p>Int:</p> <h5>{this.state.displayInt}</h5>
              </div>
            </Card>
          </Grid>
        </Grid>
        <footer className='footer'>
          <p>1.0.3 </p>© 2019 Cool Dev Labs
          <InfoDialog />
        </footer>
      </div>
    )
  }
}
