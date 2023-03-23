import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

export function NavBar() {
  return (
    <>
      <Navbar variant='dark' className='nav shadow-sm'>
        <Container>
          <Navbar.Brand to='/' as={NavLink}>
            我
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link to='/blogs' as={NavLink}>
              博客
            </Nav.Link>
            <Nav.Link to='/hobby' as={NavLink}>
              音乐
            </Nav.Link>
            <Nav.Link to='/mapbox' as={NavLink}>
              地图
            </Nav.Link>
            <Nav.Link to='/life' as={NavLink}>
              生活
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
