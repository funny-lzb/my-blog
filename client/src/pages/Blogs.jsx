import React, { useEffect } from 'react'
import BlogItems from '../components/BlogItems'
import '../css/watermelon.css'

export default function Blogs() {
  useEffect(() => {
    // 在组件挂载时执行动画效果
    const body = document.querySelector('body')
    body.classList.add('background-animation')

    // 在组件卸载时清除动画效果
    return () => {
      body.classList.remove('background-animation')
    }
  }, [])
  return (
    <div className='blog'>
      <BlogItems />
    </div>
  )
}
