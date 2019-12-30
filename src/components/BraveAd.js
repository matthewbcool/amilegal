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
            Support AAmilegal for free by downloading and using Brave.
          </Typography>
          <img alt='download brave banner ad' src={banner} />
          <Typography
            align='center'
            variant='caption'
            display='block'
            color='inherit'
            style={{ paddingBottom: '5px', margin: '0 2em' }}>
            Brave is a web browser that blocks ads and privacy trackers and pays you for your attention. Watch youtube ad free, search the web freely without your data being used.
          </Typography>
        </a>
      </Paper>
    </div>
  )
}
