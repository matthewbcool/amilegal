import React, { useRef, useState } from 'react'
import { Button } from '@material-ui/core/'
import '../App.css'
const DonationBox = () => {
  const [isDonationBoxShowing, setDonationBox] = useState(false)

  const donationBox = useRef(null)
  const showDonationBox = () => {
    setDonationBox(!isDonationBoxShowing)
    setTimeout(() => {
      donationBox.current.scrollIntoView()
    }, 1000)
  }
  return (
    <div style={{ paddingTop: '5px' }}>
      {isDonationBoxShowing ? (
        <div className='donation-wrapper' ref={donationBox}>
          <p className='donation-text'>
            Your donations help keep this website hosted and developed
            <span> 🎉🥰👨‍💻</span>. Fill in your name if you would like to be
            featured on the sponsor wall! If you want to support free tools made
            for us flight attendants donate here or sponsor the code at the
            link:
            <a
              style={{
                color: 'blue',
                textDecoration: 'underline',
                margin: 'auto'
              }}
              href='https://github.com/matthewbcool/amilegal'
              target='_blank'
              rel='noopener noreferrer'>
              AAmILegal Github Repo
            </a>
          </p>
          <iframe
            title='donar-box'
            src='https://donorbox.org/embed/aamilegal-com?hide_donation_meter=true'
            height='685px'
            width='100%'
            seamless='seamless'
            name='donorbox'
            frameBorder='0'
            scrolling='no'
            allowpaymentrequest={'true'}></iframe>
        </div>
      ) : (
        <Button
          onClick={showDonationBox}
          variant='contained'
          size='large'
          fullWidth={true}
          color='primary'>
          Donate
        </Button>
      )}
    </div>
  )
}

export default DonationBox
