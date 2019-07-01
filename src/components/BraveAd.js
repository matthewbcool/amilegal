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
            Download Brave to surf the web with built in ad block, protect your
            privacy, and support this site:
          </Typography>
          <img alt='download brave banner ad' src={banner} />
        </a>
      </Paper>
    </div>
  )
}
