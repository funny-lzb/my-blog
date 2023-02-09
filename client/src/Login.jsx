import React, { useState } from "react"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import { Container } from "react-bootstrap"

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=0a6a5af0d4e9497f8496e74c54c9503a&response_type=code&redirect_uri=http://localhost:5173/hobby&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  const [show, setShow] = useState(false)

  return (
    <div className="login">
      <Alert show={show} variant='success'>
        <Alert.Heading>此界面使用说明</Alert.Heading>
        <p>
          1.使用说明：点击下面绿色按钮"Login With Spotify"，就可以进入音乐界面，会弹出一个搜索框(顶部)和一个音乐播放器(底部)，你搜“歌手”/“歌名”就可以匹配得到你想要的。比如说我搜“周杰伦”，就可以搜到他的歌；点击你搜到的歌，就会为你播放音乐。
        </p>
        <p>2.关于歌词的问题：页面中间部分本该出现歌词，但似乎是服务器引入的lyrics-finder库有问题，后台明明能接收到前端发过来作者和歌名，但lyrics-finder却找不到歌词。如果你有耐心在此界面听完一首歌，你会发现中间提示“找不到歌词”</p>
        <p>3.吐糟：讲真的我一点也不喜欢国外的Spotify,因为你等会登录进去后，会在底下出现一个音乐播放器，它这个音乐播放器是要Spotify高级会员才能显示，类似于QQ音乐的绿钻。</p>
        <p>为此我还特意咨询了Spotify客服，每个都是说到一般跑路了，最后沟通到半夜12点多，中国区的客服来了句高级会员不对中国区开放，把我恶心坏了。更离谱的是官网还把“港澳台”三地列进了可支付列表，这就是这些客服口中的不对中国地区开放。</p>
        <p>如果有更好的选择，我绝对不会选Spotify；但国内的QQ音乐/网易云音乐API克隆下来又需要密码，为此我搜了好久不知道怎么处理。</p>
        <p>最后我花了100块钱买了三个月的Spotify高级会员，为了能够播放音乐，还希望你能明白我的辛苦QAQ</p>     
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
