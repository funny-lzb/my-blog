import { useEffect, useRef } from 'react'

export default function ResumeAnchor() {
  const navSideRef = useRef()
  const backTopRef = useRef()
  const firstLiRef = useRef()

  useEffect(() => {
    document.addEventListener('scroll', anchorCallBack)
    return () => {
      document.removeEventListener('scroll', anchorCallBack)
    }
  }, [document.documentElement.scrollTop])

  useEffect(() => {
    document.addEventListener('click', e => {
      if (e.target.matches('.nav_side ul li:nth-child(1) a')) document.documentElement.scrollTop = 125
      if (e.target.matches('.nav_side ul li:nth-child(2) a')) document.documentElement.scrollTop = 400
      if (e.target.matches('.nav_side ul li:nth-child(3) a')) document.documentElement.scrollTop = 1246
      if (e.target.matches('.nav_side ul li:nth-child(4) a')) document.documentElement.scrollTop = 1246
      if (!e.target.matches('li a')) return
    })
  }, [])

  function anchorCallBack() {
    // console.log(document.documentElement.scrollTop)

    if (document.documentElement.scrollTop >= 125) {
      navSideRef.current.classList.remove('invisible')
      navSideRef.current.style.position = 'fixed'
     
    } else {
      navSideRef.current.classList.add('invisible')
      navSideRef.current.style.position = 'absolute'
    }

    if (document.documentElement.scrollTop >= 700) {
      backTopRef.current.style.display = 'block'
    } else {
      backTopRef.current.style.display = 'none'
    }
  }

  return (
    <div ref={navSideRef} className='nav_side invisible shadow-lg'>
      <ul>
        <li ref={firstLiRef}>
          <a href='javaScript:;'>概述</a>
        </li>
        <li>
          <a href='javaScript:;'>技能</a>
        </li>
        <li>
          <a href='javaScript:;'>教育经历</a>
        </li>
        <li>
          <a href='javaScript:;'>未来展望</a>
        </li>
        <li ref={backTopRef} className='backTop'>
          <a href='#'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-arrow-bar-up'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z'
                />
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}
