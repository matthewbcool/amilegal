import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import banner from '../300x100-standard.png'

export default function BraveAd() {
  return (
    <div>
      <Paper
        className='brave-ad'
        style={{ backgroundColor: '#282c34', borderRadius: '0px' }}>
        <a href='https://brave.com/aam392'>
          <Typography
            align='center'
            variant='caption'
            display='block'
            color='inherit'
            style={{ paddingBottom: '5px', margin: '0 2em' }}>
            If you would rather not donate cash, you can download and use Brave
            to surf the web without ads and protect your privacy by blocking
            trackers! Try it out!
          </Typography>
          <img alt='download brave banner ad' src={banner} />
        </a>
      </Paper>
    </div>
  )
}
