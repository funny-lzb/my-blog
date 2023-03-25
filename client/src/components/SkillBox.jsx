import React from 'react'
import WorkList from './WorkList'
import FutureSee from './FutureSee'
import { ProgressBar } from 'react-bootstrap'

export default function SkillBox() {
  return (
    <div
      className='skill-box'
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft: '40vw',
        marginTop: '5rem',
      }}
    >
      <h2
        className='skill-title'
        style={{
          marginLeft: '-18vw',
        }}
      >
        My Skills:
      </h2>
      <div className='skill-list' style={{ width: '30vw', marginLeft: '-5vw' }}>
        <div className='skill-item'>
          <div className='skill-name'>HTML + CSS</div>
          <ProgressBar now={75} />
        </div>
        <div className='skill-item'>
          <div className='skill-name'>JavaScript</div>
          <ProgressBar now={90} />
        </div>
        <div className='skill-item'>
          <div className='skill-name'>React</div>
          <ProgressBar now={85} />
        </div>
        <div className='skill-item'>
          <div className='skill-name'>Git + npm</div>
          <ProgressBar now={70} />
        </div>
        <div className='skill-item'>
          <div className='skill-name'>webpack</div>
          <ProgressBar now={40} />
        </div>
        <div className='skill-item'>
          <div className='skill-name'>后端</div>
          <ProgressBar now={15} />
        </div>
      </div>
      <h2
        style={{
          marginLeft: '-18vw',
          marginTop: '8rem',
        }}
      >
        作品集：
      </h2>
      <WorkList />
      <h2
        style={{
          marginLeft: '-18vw',
          marginTop: '5rem',
        }}
      >
        未来规划：
      </h2>
      <FutureSee />
    </div>
  )
}
