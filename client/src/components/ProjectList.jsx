import ListGroup from "react-bootstrap/ListGroup"

export default function ProjectList() {
  return (
    <>
      <ul className='project-list'>
        <li>
          <h1>
            <a href='https://steady-sunshine-8cf963.netlify.app'>
              Halloween Card Game
            </a>
          </h1>
          <h6>
            <a href='https://github.com/funny-lzb/Halloween-card-game'>
              Github地址
            </a>
          </h6>
          <div>技术栈/引入库: html + css + js</div>
          <div>游戏介绍: 卡牌匹配游戏</div>
          <h5 className='add-color'>游戏规则:(希望你先看游戏规则再玩，建议佩戴耳机，有音乐声)</h5>
          <ListGroup as='ol' numbered>
            <ListGroup.Item as='li'>
              开始: 玩家进入页面，点击界面即可进入游戏
            </ListGroup.Item>
            <ListGroup.Item as='li' className='add-color'>
              翻牌: 玩家需要翻到第1张与第2张相同的牌，否则将一直翻下去，直到找到匹配的牌为止(有点像消消乐)
            </ListGroup.Item>
            <ListGroup.Item as='li'>
              游戏失败: 玩家如果在规定的200秒内没有匹配到所有的牌，则会提示“Game Over”
            </ListGroup.Item>
            <ListGroup.Item as='li'>
              游戏胜利: 玩家如果在200秒内提前翻出了所有匹配的牌，则会提示"Victory"
            </ListGroup.Item>
            <ListGroup.Item as='li'>
              重新玩：如果你“Game Over"或者"Victory"了，均可点击页面任意一点重新开始
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
          <div>
            技术栈/引入库: vite + typescript + react + react-router v6 +
            react-boostrap + localStorage + Intl
          </div>
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
      </ul>
    </>
  )
}
