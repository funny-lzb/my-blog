import React, { useState } from "react"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import { Container } from "react-bootstrap"

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=0a6a5af0d4e9497f8496e74c54c9503a&response_type=code&redirect_uri=https://test1.leftover.cn/hobby&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  const [show, setShow] = useState(false)

  return (
    <div className="login">
      <Alert show={show} variant='success'>
        <Alert.Heading>此界面使用说明</Alert.Heading>
        <p>一、登录必须 </p>
        <p>账号：lzb129239@gmail.com</p>
        <p>密码：nanshen129239..+</p>
        <p>
          二、功能：
        </p>
        <p>1.点击下面绿色按钮"Login With Spotify"，就可以进入音乐界面，会弹出一个搜索框(顶部)和一个音乐播放器(底部)</p>
        <p>2.你搜“歌手”/“歌名”就可以匹配得到你想要的。比如说我搜“周杰伦”，就可以搜到他的歌；点击你搜到的歌，就会为你播放音乐</p>
        <p>3.更多功能如果你有耐心听完一首音乐就能看到</p>
        <p>三、关于歌词的问题：</p>  
        <p>页面中间部分本该出现歌词，但似乎是服务器引入的lyrics-finder库有问题，后台明明能接收到前端发过来作者和歌名，但lyrics-finder却找不到歌词。如果你有耐心在此界面听完一首歌，你会发现中间提示“找不到歌词”</p>
        <hr />
        <div className='d-flex justify-content-end'>
          <Button onClick={() => setShow(false)} variant='outline-success'>
            点我，关闭弹窗！
          </Button>
        </div>
      </Alert>
      {!show && <Button onClick={() => setShow(true)}>使用说明，点我！！</Button>}

      <Container
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: "100vh"}}
      >
        <a className='btn btn-success btn-lg' href={AUTH_URL}>
          Login With Spotify
        </a>
      </Container>
    </div>
  )
}
