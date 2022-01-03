import './App.css';
import { Carousel, Navbar, Container, Nav, Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Victoria from './Victoria.svg';
import LinkedIn from './LinkedIn.svg';
import Title from './Title.svg';
import GitHub from './GitHub.svg';
import TitleSmall from './TitleSmall.svg'
import React, { useState, useEffect } from 'react';
import { MdOutlineMenu, MdClose } from 'react-icons/md';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
  })
  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth)
    }
  })
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  const hamburgerIcon = <MdOutlineMenu className="Hamburger"
    onClick={() => setOpen(!open)}
  /> 
  const closedIcon = <MdClose className="Hamburger"
    onClick={() => setOpen(!open)}
  />
  return (
    <div className="App">
      {windowWidth < 500 ? 
      <><Navbar bg="cream" expand="true" sticky="top" className="mobileNav">
        <nav className="mobileNav"> 
              {open ? closedIcon : hamburgerIcon}
              {open && 
                <ul>
                <li>
                  <a href="http://www.linkedin.com/in/victoria-jeon">
                    <img src={LinkedIn} id="linkedIn-logo" alt="linkedIn-logo" />
                    <h4 className='link'>LinkedIn</h4>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/hmj248">
                    <img src={GitHub} id="gitHub-logo" alt="gitHub-logo" />
                    <h4 className='link'>GitHub</h4>
                  </a>
                </li>
              </ul> }
        </nav>
          <Container fluid className="App-Header">
            <Navbar.Brand href="#">
              <img src={Victoria} alt="logo" />
            </Navbar.Brand>
            <img src={TitleSmall} alt="title" />
          </Container>
        </Navbar>
          <Container className='AboutMe'>
            <h1>About Me</h1>
          </Container>
          <Container className="App-Projects">
            <Carousel>
              <Carousel.Item interval={5000}>
                <img src='/Victoria.png' className='App-logo' alt='App-logo' />
              </Carousel.Item>
              <Carousel.Item interval={4000}>
                <Nav.Link href="http://good-morels.herokuapp.com/home">
                  <img src='https://giphy.com/embed/yZRoXvpZflasovKcmN' alt='Mushroom' />
                </Nav.Link>
                <Carousel.Caption>
                  {/* <h3>Second Slide label</h3> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Container></> : 
 <><Navbar bg="cream" expand="true" sticky="top">
          <Container fluid className="App-Header">
            <Navbar.Brand href="#">
              <img src={Victoria} alt="logo" />
            </Navbar.Brand>
            <nav className="Navbar-Links">
              <Nav.Link className='Navbar-Link' href="http://www.linkedin.com/in/victoria-jeon">
                <img src={LinkedIn} id="linkedIn-logo" alt="linkedIn-logo" />
                <h4 className='link'>LinkedIn</h4>
              </Nav.Link>
              <Nav.Link className='Navbar-Link' href="https://github.com/hmj248">
                <img src={GitHub} id="gitHub-logo" alt="gitHub-logo" />
                <h4 className='link'>GitHub</h4>
              </Nav.Link>
            </nav>
          </Container>
        </Navbar>
        <Container className="Title">
            <img src={Title} alt="title" />
          </Container>
          <Container className="App-Projects">
            <Carousel>
              <Carousel.Item interval={5000}>
                <img src='/Victoria.png' className='App-logo' alt='App-logo' />
              </Carousel.Item>
              <Carousel.Item interval={4000}>
                <Nav.Link href="http://good-morels.herokuapp.com/home">
                  <img src='https://giphy.com/embed/yZRoXvpZflasovKcmN' alt='Mushroom' />
                </Nav.Link>
                <Carousel.Caption>
                  {/* <h3>Second Slide label</h3> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Container></>}
     </div>
    )
  }

export default App;
