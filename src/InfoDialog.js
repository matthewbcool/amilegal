import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

function Transition(props) {
  return <Slide direction='up' {...props} />
}

function InfoDialog() {
  const [open, setOpen] = React.useState(false)

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Info
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'>
        <DialogTitle id='alert-dialog-slide-title'>
          {'About this App'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            If you find a bug or have any issues using this tool, please send an
            email to cooldevla{/*_*/}bs@{/*_*/}g{/*_*/}m{/*_*/}a{/*_*/}il.
            {/*_*/}co{/*_*/}m with 'AmILegal' in the subject.
          </DialogContentText>
        </DialogContent>
        <DialogTitle id='alert-dialog-slide-title'>
          {'Updates Coming/Disclaimer'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Known Bugs: Be careful when calculating breaks near the cutoffs for
            sign-ins Be aware of your homebase times when coming back from
            trips. Will fix as soon as I can get to it.
            <br />
            OBLIGATORY DISCLAIMER: Use this tool to give you a good estimation
            but always confirm with crew tracking and double check.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Got it!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default InfoDialog
