import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogItems() {
  return (
    <>
      <ul className='blog-items-list'>
        <li>
          <h1>
            <a href="https://zhuanlan.zhihu.com/p/592499356">事件循环 </a>
          </h1>
          <span className='blog-item-topic'>JavaScript</span>
          <p>事件循环涉及到了同步异步,浏览器APIs,任务队列等东西,这么多东西聚在一起构成了事件循环。在这篇博客里我将介绍事件循环具体流程,以及同步异步和promise的输出顺序。</p>
        </li>
        <li>
          <h1>
            <a href='https://zhuanlan.zhihu.com/p/589425954'>作用域链及闭包</a>
          </h1>
          <span className='blog-item-topic'>JavaScript</span>
          <p>在这个博客里我将介绍很多编程语言都有的闭包,对应的就是函数在调用栈中执行完后,外部变量应该被销毁。而在JavaScript中为什么闭包这么出名呢?人们谈到闭包往往会谈到作用域链,那它们两个之间又有过什么千丝万缕的联系呢?</p>
        </li>
        <li>
          <h1>
            <a href='https://zhuanlan.zhihu.com/p/594182954'>ES6模块语法 && 打包器</a>
          </h1>
          <span className='blog-item-topic'>Module/Bundlers</span>
          <p>ES6的模块语法绝对是个巨大突破,我非常喜欢ES6的模块语法,它让链接script脚本时,不会出现变量污染的情况。而打包工具的出现则是奠定了前端工程化的基石,让一切变得更加方便。</p>
        </li>
        <li>
          <h1>
            <a href='https://zhuanlan.zhihu.com/p/586055801'>TCP 三次握手/四次挥手</a>
          </h1>
          <span className='blog-item-topic'>Network</span>
          <p>当客户端向服务器发送数据时,过程中发生了什么呢?为什么握手规定要三次,挥手要四次呢?</p>
        </li>
      </ul>
    </>
  )
}
