import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Button
      className='scroll-top-button'
      variant='primary'
      onClick={handleClick}
      style={{
        visibility: visible ? 'visible' : 'hidden',
        position: 'fixed',
        bottom: '30%',
        right: '0%',
        backgroundColor: '#fff',
        border: '0px',
      }}
    >
      <svg
        t='1679717010073'
        class='icon'
        viewBox='0 0 1024 1024'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        p-id='2894'
        width='30'
        height='30'
      >
        <path
          d='M754.42175 535.630187 534.314727 315.041186c-3.136433-4.727675-7.768941-8.646937-13.719466-10.728342-3.183506-1.249457-6.563486-1.812275-9.993608-1.738597-0.24457 0-0.442068-0.12382-0.697895-0.12382-0.331551 0-0.600681 0.148379-0.932232 0.170892-3.342118-0.047072-6.638187 0.466628-9.711176 1.665942-6.05081 2.105964-10.751878 6.075369-13.912871 10.924817L265.432837 535.630187c-10.201339 10.191106-9.406231 27.53103 1.727341 38.653345 11.144828 11.118222 27.947516 11.412934 38.151925 1.223874 0.806365-0.832971 1.603521-1.372254 2.276856-2.303462l173.826977-173.521009 0.282433 413.372725c-0.159636 1.079588 0 1.959631 0 3.039219 0 13.568017 12.076036 24.591071 27.838022 24.591071s28.54615-11.023054 28.54615-24.591071l0.295735-416.411945 173.862793 173.521009c0.686638 0.931209 1.469468 1.470491 2.304486 2.303462 10.188037 10.18906 26.991748 9.894348 38.136575-1.223874C763.829004 563.161217 764.612856 545.821293 754.42175 535.630187z'
          fill='#5D5D5D'
          p-id='2895'
        ></path>
        <path
          d='M865.262184 209.94764c0 13.851473-11.220552 25.082258-25.083282 25.082258L179.665451 235.029898c-13.852496 0-25.083282-11.231809-25.083282-25.082258l0 0c0-13.852496 11.230786-25.083282 25.083282-25.083282l660.513452 0C854.041632 184.864358 865.262184 196.095143 865.262184 209.94764L865.262184 209.94764z'
          fill='#5D5D5D'
          p-id='2896'
        ></path>
      </svg>
    </Button>
  )
}

export default ScrollTopButton
