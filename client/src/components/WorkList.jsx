import React from 'react'
import UseFadeInLeft from '../hooks/UseFadeInLeft'
import UseFadeInRight from '../hooks/UseFadeInRight'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function WorkList() {
  return (
    <>
      <Container style={{ marginTop: '5vh', marginLeft: '-11vw' }}>
        <Row
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignContent: 'space-between',
          }}
        >
          <UseFadeInLeft targetPosition={1300}>
            <Col
              md={15}
              style={{
                marginBottom: '1rem',
                flexBasis: '100%',
                display: 'flex',
                justifyContent: ' space-between',
              }}
            >
              <a href='https://steady-sunshine-8cf963.netlify.app/'>
                <Card
                  style={{
                    marginRight: '1rem',
                  }}
                >
                  <Card.Img variant='top' src='/imgs/project-one.jpg' />
                  <Card.Body>
                    <Card.Title>万圣节翻牌游戏</Card.Title>
                    <Card.Text>类似于消消乐</Card.Text>
                  </Card.Body>
                </Card>
              </a>
              <a href='https://verdant-fenglisu-8fb1e1.netlify.app'>
                <Card>
                  <Card.Img variant='top' src='/imgs/project-two.jpg' />
                  <Card.Body>
                    <Card.Title>购物车 React + Ts</Card.Title>
                    <Card.Text>购物车增删改查，计算总价</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </UseFadeInLeft>
          <UseFadeInRight targetPosition={1600}>
            <Col
              md={15}
              style={{
                marginBottom: '1rem',
                flexBasis: '100%',
                display: 'flex',
                justifyContent: ' space-between',
              }}
            >
              <a href='https://shimmering-chaja-60e955.netlify.app/'>
                <Card
                  style={{
                    marginRight: '1rem',
                  }}
                >
                  <Card.Img variant='top' src='/imgs/project-three.jpg' />
                  <Card.Body>
                    <Card.Title>食谱编辑菜单</Card.Title>
                    <Card.Text>增删改查</Card.Text>
                  </Card.Body>
                </Card>
              </a>
              <a href='https://magenta-melba-8f8cbe.netlify.app/'>
                <Card>
                  <Card.Img variant='top' src='/imgs/project-four.jpg' />
                  <Card.Body>
                    <Card.Title>购物车 JS</Card.Title>
                    <Card.Text>增删改查</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </UseFadeInRight>
        </Row>
      </Container>
    </>
  )
}
