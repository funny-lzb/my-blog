import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=0a6a5af0d4e9497f8496e74c54c9503a&response_type=code&redirect_uri=https://test1.leftover.cn/hobby&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export default function Login() {
  const [show, setShow] = useState(false)

  return (
    <div className='login'>
      <Alert show={show} variant='success'>
        <Alert.Heading>连国外ip才能登录，中国ip不支持</Alert.Heading>
        <p>点击下面的"Login With Spotify"</p>
        <p>账号：lzb129239@gmail.com</p>
        <p>密码：nanshen129239..+</p>
        <hr />
        <div className='d-flex justify-content-end'>
          <Button onClick={() => setShow(false)} variant='outline-success'>
            点我，关闭弹窗！
          </Button>
        </div>
      </Alert>
      {!show && (
        <Button onClick={() => setShow(true)}>使用说明，点我！！</Button>
      )}

      <Container
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: '100vh' }}
      >
        <a className='btn btn-success btn-lg' href={AUTH_URL}>
          Login With Spotify
        </a>
      </Container>
    </div>
  )
}
