import ReactPlayer from "react-player"
import React, { useState } from "react"
import Carousel from "react-bootstrap/Carousel"

export default function Life() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <div className="bgc">
    <h3 className='title center-x' style={{paddingTop:'10vh'}}>剪辑视频：</h3>
      <ReactPlayer
        width='600px'
        height='365px'
        url='video/game.mp4'
        controls
        volume="0.6"
        className="react-player"
      />
      <h3 className='title center-x'>座右铭：</h3>
      <div className='motto'>
        <div className='motto-text'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            class='self-start h-6 w-6 md:h-8 md:w-8 text-blue-500 flex-shrink-0 transform rotate-180'
            viewBox='0 0 975.036 975.036'
          >
            <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
          </svg>
          <h1>你说爱像云，遥自在漂浮才美丽</h1>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            class='self-end h-6 w-6 md:h-8 md:w-8 text-blue-500 flex-shrink-0'
            viewBox='0 0 975.036 975.036'
          >
            <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
          </svg>
        </div>
        <div className='motto-author'>阿桑</div>
      </div>
      <div className='life'>
        <h3 className='title'>我的朋友圈：</h3>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='/imgs/img1.jpg'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>在金牛</h3>
              <p>这是小时候的我</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='/imgs/img2.jpg'
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>在深圳</h3>
              <p>当时我叔叔为了送我爸爸，请我们吃了大餐</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='/imgs/img4.jpg'
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>在深圳</h3>
              <p>当时我叔叔为了送我爸爸，请我们吃了大餐</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='/imgs/img5.jpg'
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>在武汉</h3>
              <p>当时跟我的好朋友一起在江汉路吃的火锅</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='/imgs/img6.jpg'
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>在东莞</h3>
              <p>记录一下我的鸭腿饭</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='/imgs/img7.jpg'
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>在东莞</h3>
              <p>下班时拍的</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}
