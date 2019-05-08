import React from 'react'
import Input from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

class TimePicker extends React.Component {
  render() {
    return (
      <div className='time-picker-wrapper'>
        <form autoComplete='off'>
          <FormControl>
            <InputLabel htmlFor='hour'>Hour</InputLabel>
            <Select
              value={this.props.hour}
              onChange={this.props.handleChange}
              inputProps={{
                name: 'hour',
                id: 'hour'
              }}>
              <MenuItem value=''>Hour</MenuItem>
              <MenuItem value={1}>01</MenuItem>
              <MenuItem value={2}>02</MenuItem>
              <MenuItem value={3}>03</MenuItem>
              <MenuItem value={4}>04</MenuItem>
              <MenuItem value={5}>05</MenuItem>
              <MenuItem value={6}>06</MenuItem>
              <MenuItem value={7}>07</MenuItem>
              <MenuItem value={8}>08</MenuItem>
              <MenuItem value={9}>09</MenuItem>
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
              <MenuItem value={24}>00</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='minute'>Minutes</InputLabel>
            <Select
              value={this.props.minute}
              onChange={this.props.handleChange}
              inputProps={{
                name: 'minute',
                id: 'minute'
              }}>
              <MenuItem value=''>Minutes</MenuItem>
              <MenuItem value={1}>01</MenuItem>
              <MenuItem value={2}>02</MenuItem>
              <MenuItem value={3}>03</MenuItem>
              <MenuItem value={4}>04</MenuItem>
              <MenuItem value={5}>05</MenuItem>
              <MenuItem value={6}>06</MenuItem>
              <MenuItem value={7}>07</MenuItem>
              <MenuItem value={8}>08</MenuItem>
              <MenuItem value={9}>09</MenuItem>
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
              <MenuItem value={22}>22 </MenuItem>
              <MenuItem value={23}>23 </MenuItem>
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
              <MenuItem value={0}>00</MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
    )
  }
}

export default TimePicker
