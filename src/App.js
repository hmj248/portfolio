import './App.css';
import { Carousel, Navbar, Container,Offcanvas, Nav, NavDropdown, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Victoria from './Victoria.svg';
import LinkedIn from './LinkedIn.svg';
import Title from './Title.svg';
import GitHub from './GitHub.svg';
import React, { useState, useEffect, setState } from 'react';

function App(props) {
  const [width, setWidth] = useState({ width: 0 });
  const getWindowWidth = () => {
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    )
  }
  const onResize = () => {
    window.requestAnimationFrame(() => {
      setWidth({
        width: getWindowWidth()
      })
    })
  }
  const useComponentWillMount = () => {
    useEffect(() => {
      return () => {
        setWidth({ width: getWindowWidth()})
      }
    })
  }
  const useComponentDidMount = () => {
    window.addEventListener('resize', onResize)
  }
  const useComponentWillUnmount = () => {
    window.addEventListener('resize', onResize)
  }
  console.log('i am here', props)
  return (
    <div className="App">
      <Navbar bg="cream" expand="true" sticky="top">
        <Container fluid className="App-Header">
          <Navbar.Brand href="#">
            <img src={Victoria} alt="logo"/>
          </Navbar.Brand> 
          <nav className="Navbar-Links">
            <Nav.Link className='Navbar-Link' href="http://www.linkedin.com/in/victoria-jeon">
              <img src={LinkedIn} id="linkedIn-logo" alt="linkedIn-logo"/>
              <h4 className='link'>LinkedIn</h4>
            </Nav.Link>
            <Nav.Link className='Navbar-Link' href="GitHub">
              <img src={GitHub} id="gitHub-logo" alt="gitHub-logo"/>
              <h4 className='link'>GitHub</h4>
            </Nav.Link>
            {/* <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas> */}
          </nav>
        </Container>
      </Navbar>
      {/* <Container className="App-Body">
      </Container> */}
      <Container className="Title">
        <img src={Title} alt="title"/>
      </Container>
      <Container className="App-Projects">
        <Carousel>
          <Carousel.Item interval={5000}>
            <img src='/Victoria.png' className='App-logo'alt='App-logo'/>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
          <Nav.Link href="http://good-morels.herokuapp.com/home">
            <img src='https://giphy.com/embed/yZRoXvpZflasovKcmN' alt='Mushroom'/>
          </Nav.Link>
          <Carousel.Caption>
            {/* <h3>Second Slide label</h3> */}
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
     </Container>
     </div>
    )
  }

export default App;
