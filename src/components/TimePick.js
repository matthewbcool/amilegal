import React, { useState } from 'react'
import DateFnsUtils from '@date-io/dayjs'
import { MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers'

function TimePick(props) {
  const [selectedTime, changeSelectedTime] = useState()

  const handleTimeChange = selectedTime => {
    props.setSignIn(selectedTime)
    changeSelectedTime(selectedTime)
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker value={selectedTime} onChange={handleTimeChange} />
    </MuiPickersUtilsProvider>
  )
}

export default TimePick
