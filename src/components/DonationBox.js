import React, { useRef, useState } from 'react'
import { Button } from '@material-ui/core/'
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
    <div>
      {isDonationBoxShowing ? (
        <div ref={donationBox} style={{ padding: '5px' }}>
          <p>
            Help keep the project hosted and developed. Coders can donate code
            here:
            <a
              style={{ color: 'blue', textDecoration: 'underline' }}
              href='https://github.com/matthewbcool/amilegal'>
              Github
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
