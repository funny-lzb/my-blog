import ListGroup from 'react-bootstrap/ListGroup';

export default function ResumeSkill() {
  return (
    <div className="resume-skill">
      <h2>技能</h2>
      <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">HTML CSS (熟练度A)</div>
          <span>熟练掌握常用的html 5标签,掌握块级、行内块、行内标签之间的区别</span>
          <br />
          <span>熟练现代CSS3,精通flex(弹性)布局,熟悉媒体查询</span>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">JavaScript (熟练度S+)</div>
          精通JavaScript,深入理解闭包,事件循环,原型,异步,事件委托等
        </div>
       
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">打包器 (熟练度 B)</div>
          了解vite,parcel,snowpack,webpack等打包工具,能用这些现成的脚手架搭建项目
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">框架 (熟练度 S)</div>
          熟悉React,React-Hooks,React-Router v6,
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">网络 (熟练度 B+)</div>
          熟悉TCP/IP协议(如三次握手,四次挥手)
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">npm Git Github Netlify (熟练度 A)</div>
          了解常用的npm,git指令,会部署项目到Github和Netlify上
        </div>
      </ListGroup.Item>
    </ListGroup>
    </div>
  )
}
