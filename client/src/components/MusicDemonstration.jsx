import ReactPlayer from 'react-player'

export default function MusicDemonstration() {
  return (
    <>
      <h2
        style={{
          marginTop: '5rem',
          marginLeft: '21vw',
        }}
      >
        "音乐"界面演示:
      </h2>
      <ReactPlayer
        width='600px'
        height='365px'
        url='video/music.mp4'
        controls
        volume='0.6'
        className='react-player'
      />
    </>
  )
}
