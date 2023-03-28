import React, {  useEffect, useRef } from 'react'
import '../css/fadeIn.css'

export default function UseFadeInRight({ targetPosition, children }) {
  const targetRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset + window.innerHeight
      if (currentPosition >= targetPosition) {
        targetRef.current.classList.add('fade-in-right')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <div ref={targetRef}>{children}</div>
}
