import ListGroup from 'react-bootstrap/ListGroup'

export default function ProjectList() {
  return (
    <>
      <ul className='project-list'>
        <li>
          <h1>
            <a href='https://shimmering-chaja-60e955.netlify.app'>
              Cooking With React
            </a>
          </h1>
          <h6>
            <a href='https://github.com/funny-lzb/Cooking-recipe-with-React'>
              Github地址
            </a>
          </h6>
          <div>技术栈/引入库: create-react-app + localStorage + react-hook</div>
          <div>核心功能: 增删改查</div>
          <div>项目功能:</div>
          <ListGroup as='ol' numbered>
            <ListGroup.Item as='li'>
              编辑:用户可以点击食谱Edit按钮,并展开食谱编辑框
            </ListGroup.Item>
            <ListGroup.Item as='li'>
              增:用户可以点击任意Add按钮,都可以弹出新的编辑框
            </ListGroup.Item>
            <ListGroup.Item as='li'>
              删:用户可以点击任意Delete/x按钮,都可以删除编辑框
            </ListGroup.Item>
            <ListGroup.Item as='li' className='add-color'>
              改:食谱编辑框的内容可以任意修改,并且可以即时同步到左边对应的食谱
            </ListGroup.Item>
            <ListGroup.Item as='li'>
              数据持久化,刷新页面,数据依然保存
            </ListGroup.Item>
          </ListGroup>
        </li>
        <li>
          <h1>
            <a href='https://verdant-fenglisu-8fb1e1.netlify.app'>
              Shopping Cart With React && Ts
            </a>
          </h1>
          <h6>
            <a href='https://github.com/funny-lzb/Advanced-Shopping-Cart-With-React-and-Ts'>
              Github地址
            </a>
          </h6>
          <div>技术栈/引入库: vite + typescript + react + react-router v6 + react-boostrap + localStorage + Intl</div>
          <div>核心功能: 增删改查,用原数组生成一个购物车渲染数组</div>
          <div>项目功能:</div>
          <ListGroup as='ol' numbered>
            <ListGroup.Item as='li' className='add-color'>
              购物车:计算总价,用数组的reduce方法
            </ListGroup.Item>
            <ListGroup.Item as='li'>
              增:用户可以点击界面任意Add/+按钮,都会增加对应的数量到购物车里
            </ListGroup.Item>
            <ListGroup.Item as='li'>
              删:用户可以点击任意-/x按钮,都可以删除其对应的购物车项目及Store界面项目
            </ListGroup.Item>
            <ListGroup.Item as='li'>
              格式化货币:用Intl生成对象来格式化货币符号
            </ListGroup.Item>
            <ListGroup.Item as='li'>
              数据持久化,刷新页面,数据依然保存
            </ListGroup.Item>
          </ListGroup>
        </li>
        <li>
          <h1>
            <a href='https://shimmering-chaja-60e955.netlify.app'>
              Cooking With React
            </a>
          </h1>
          <h6>
            <a href='https://github.com/funny-lzb/Cooking-recipe-with-React'>
              Github地址
            </a>
          </h6>
          <div>技术栈/引入库: create-react-app + localStorage + react-hook</div>
          <div>核心功能:增删改查</div>
          <div>项目功能:</div>
          <ListGroup as='ol' numbered>
            <ListGroup.Item as='li'>
              编辑:用户可以点击食谱Edit按钮,并展开食谱编辑框
            </ListGroup.Item>
            <ListGroup.Item as='li'>
              增:用户可以点击任意Add按钮,都可以弹出新的编辑框
            </ListGroup.Item>
            <ListGroup.Item as='li'>
              删:用户可以点击任意Delete/x按钮,都可以删除编辑框
            </ListGroup.Item>
            <ListGroup.Item as='li' className='add-color'>
              改:食谱编辑框的内容可以任意修改,并且可以即时同步到左边对应的食谱
            </ListGroup.Item>
            <ListGroup.Item as='li'>
              数据持久化,刷新页面,数据依然保存
            </ListGroup.Item>
          </ListGroup>
        </li>
      </ul>
    </>
  )
}
