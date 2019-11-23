import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Slide from '@material-ui/core/Slide'
import '../App.css'

function Transition(props) {
  return <Slide direction='up' {...props} />
}

function SponsorModal() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        variant='outlined'
        style={{
          color: 'white',
          backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #ff4e50 100%)',
          border: '1px solid gold'
        }}
        onClick={handleClickOpen}>
        Sponsor Wall
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='supporters-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'>
        <DialogContent className='sponsor-modal-wrapper'>
          <h4>Concierge Key (over $10)</h4>
          <div>
            <p className='ck'>Kelly Cool-Lesko & Brad Lesko </p>
          </div>
          <h4>EP ($10)</h4>
          <div className='ep'> </div>
          <h4>Platinum ($5)</h4>
          <div className='plat'>
            <p>Doreen Mei</p>
          </div>

          <h4>Gold ($1)</h4>
          <div className='goldies'>
            <p>Brent Beacham</p>
            <p>Tim Cool</p>
            <p>Pat Cool</p>
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SponsorModal
