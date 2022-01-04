import './App.css';
import { Carousel, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Victoria from './Victoria.svg';
import LinkedIn from './LinkedIn.svg';
// import Title from './Title.svg';
import GitHub from './GitHub.svg';
import TitleSmall from './TitleSmall.svg';
import Mushroom from './Mushroom.gif';
import java from './logo-javascript.svg';
import node from './Node.js_logo.svg';
import reactIcon from './React.svg';
import reduxIcon from './redux.svg';
import htmlCss from './htmlCss.svg';
import agile from './agileMethodology.svg';
import sequelize from './sequelize.svg';
import gcp from './GCP.svg';
import git from './git.svg';
import postgres from './postgres.svg';
import webpack from './webpack.svg';
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
      {windowWidth < 1018 ? 
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
          <Container fluid className='AboutMe-Mobile'>
            <img src='/Victoria.png' className='App-logo-mobile' alt='App-logo' />
            <h1>Hi, I'm Victoria.</h1>
            <p>
              I'm a Full-stack Web Developer with a passion for learning new technologies and exploring innovative solutions. 
            </p>
          </Container>
          <Container fluid className="App-Projects-Mobile">
          <h1>My Projects</h1>
            <Carousel >
              <Carousel.Item interval={4000} >
                <Container fluid className='project-mobile'>
                  <Nav.Link href="http://good-morels.herokuapp.com/home">
                  <img src={Mushroom} alt='mushroom' className='mushroom-mobile'/>
                  </Nav.Link>
                  <Carousel.Caption className='mobile'>
                    <h3>good-morsels</h3>
                    <p>An E-commerce web application that sells medicinal mushrooms.
                      Developed with React-Redux, PostgreSQL, NodeJS, and Express.js.
                      tilized React-Redux and local storage to create a functioning cart for authenticated users and guests.
                    </p>
                  </Carousel.Caption>
                </Container>
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
          <Container fluid className='AboutMe'>
            <div>
              <h1>Hi, I'm Victoria.</h1>
              <p>
              I'm a Full-stack Web Developer with a passion for learning new technologies and exploring innovative solutions.
              </p>
            </div>
            <img src='/Victoria.png' className='App-logo' alt='App-logo' />
          </Container>
          <Container fluid className="App-Projects">
          <h1>My Projects</h1>
            <Carousel >
              <Carousel.Item interval={4000} >
                <Container className='project'>
                  <Nav.Link href="http://good-morels.herokuapp.com/home">
                  <img src={Mushroom} alt='mushroom' className='mushroom'/>
                  </Nav.Link>
                  <Carousel.Caption>
                    <h3>good-morsels</h3>
                    <p>An E-commerce web application that sells medicinal mushrooms.
                      Developed with React-Redux, PostgreSQL, NodeJS, and Express.js.
                      tilized React-Redux and local storage to create a functioning cart for authenticated users and guests.
                    </p>
                  </Carousel.Caption>
                </Container>
              </Carousel.Item>
            </Carousel>
          </Container>
          <Container fluid className='Skills'>
            <h3>Tech Stack</h3>
            <Row >
              <Col md={{ offset: 1}} className="skills">
                <img src={java} alt='javaScript' className='skills-icon'/>
                <h5>JavaScript/ES2015</h5>
              </Col>
              <Col md={{ offset: 1}} className="skills">
                <img src={node} alt='expressjs/nodejs' className='skills-icon'/>
                <h5>ExpressJS & NodeJS</h5>
              </Col>
              <Col md={{ offset: 1}} className="skills">
                <img src={reactIcon} alt='react' className='skills-icon'/>
                <h5>ReactJS</h5>
              </Col>
              <Col md={{ offset: 1}} className="skills">
                <img src={reduxIcon} alt='redux' className='skills-icon'/>
                <h5>Redux</h5>
              </Col>
            </Row>
            <Row >
              <Col md={{ offset: 1}} className="skills">
                <img src={htmlCss} alt='htmlcss' className='skills-icon'/>
                <h5>html5/css3</h5>
              </Col>
              <Col md={{ offset: 1}} className="skills">
                <img src={agile} alt='agile' className='skills-icon'/>
                <h5>Agile Framework</h5>
              </Col>
              <Col md={{ offset: 1}} className="skills">
                <img src={sequelize} alt='sequelize' className='skills-icon'/>
                <h5>Sequelize</h5>
              </Col>
              <Col md={{ offset: 1}} className="skills">
                <img src={gcp} alt='gcp' className='skills-icon'/>
                <h5>Google Cloud Platform:</h5>
                <ul>
                  <li>Cloud Firestore</li>
                  <li>Firebase</li>
                  <li>Compute Engine VM Instances</li>
                </ul>
              </Col>
            </Row>
            <Row className ="lastRow">
              <Col md={{ offset: 1}} className="skills">
                <img src={git} alt='git' className='skills-icon'/>
                <h5>Git & GitHub Workflow</h5>
              </Col>
              <Col md={{ offset: 1}} className="skills">
                <img src={postgres} alt='postgres' className='skills-icon'/>
                <h5>PostgreSQL</h5>
              </Col>
              <Col md={{ offset: 1}} className="skills">
                <img src={webpack} alt='webpack' className='skills-icon'/>
                <h5>Webpack</h5>
              </Col>
            </Row>
            </Container>
          </>}
     </div>
    )
  }

export default App;
