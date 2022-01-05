import './App.css';
import { Carousel, Navbar, Container, Nav, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Victoria from './Victoria.svg';
import LinkedIn from './LinkedIn.svg';
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
import responsive from './responsive.svg';
import cache22 from './cache-22-logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineMenu, MdClose, MdMailOutline } from 'react-icons/md';
import { DiGithubBadge } from "react-icons/di"
import { IoLogoLinkedin } from "react-icons/io";
import { IconContext } from 'react-icons';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
  })

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth)
    }
  })

  const handleClick = (value) => {
    window.location.assign(value)
  }

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
          <h1>my projects</h1>
            <Carousel >
              <Carousel.Item interval={7000} >
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
              <Carousel.Item interval={7000} >
                <Container fluid className='project-mobile'>
                  <Nav.Link href="https://github.com/Usuls-Usurpers/Capstone-Offline-Reader">
                    <Image rounded src={cache22} alt='cache22' className='cache22-mobile'/>
                  </Nav.Link>
                  <Carousel.Caption className= 'mobile'>
                    <h3>cache-22</h3>
                    <p>
                      A mobile and web application that enables users to save articles for offline viewing.
                      Developed with Puppeteer to scrape web pages, PWA to utilize a Service Worker to cache 
                      the web pages, a Chrome extension, Cloud Firestore, and Firebase authentication.
                    </p>
                  </Carousel.Caption>
                </Container>
              </Carousel.Item>
            </Carousel>
          </Container>
          <Container fluid className='Skills-mobile'>
            <h3>my skills</h3>
            <Row className="first">
              <Col className="skills-mobile">
                <img src={java} alt='javaScript' className='skills-icon-mobile'/>
                <h5>JavaScript<br></br>
                  /ES2015</h5> 
              </Col>
              <Col className="skills-mobile">
                <img src={node} alt='expressjs/nodejs' className='skills-icon-mobile'/>
                <h5>ExpressJS & NodeJS</h5>
              </Col>
              <Col className="skills-mobile">
                <img src={reactIcon} alt='react' className='skills-icon-mobile'/>
                <h5>ReactJS</h5>
              </Col>
              <Col className="skills-mobile">
                <img src={reduxIcon} alt='redux' className='skills-icon-mobile'/>
                <h5>Redux</h5>
              </Col>
              <Col className="skills-mobile">
                <img src={htmlCss} alt='htmlcss' className='skills-icon-mobile'/>
                <h5>html5/css3</h5>
              </Col>
              <Col className="skills-mobile">
                <img src={agile} alt='agile' className='skills-icon-mobile'/>
                <h5>Agile Framework</h5>
              </Col>
              <Col className="skills-mobile">
                <img src={responsive} alt='responsive web design' className='skills-icon-mobile'/>
                <h5>Responsive Web Design</h5>
              </Col>
              <Col className="skills-mobile">
                <img src={git} alt='git' className='skills-icon-mobile'/>
                <h5>Git & GitHub Workflow</h5>
              </Col>
              <Col className="skills-mobile" >
                <img src={gcp} alt='gcp' className='skills-icon-mobile'/>
                <h5>Google Cloud Platform</h5>
                {/* <ul id="gcp-skill">
                  <li>Cloud Firestore</li>
                  <li>Firebase</li>
                  <li>Compute Engine VM Instances</li>
                </ul> */}
              </Col>
              <Col className="skills-mobile">
                <img src={postgres} alt='postgres' className='skills-icon-mobile'/>
                <h5>PostgreSQL</h5>
              </Col>
              <Col className="skills-mobile">
                <img src={webpack} alt='webpack' className='skills-icon-mobile'/>
                <h5>Webpack</h5>
              </Col>
              <Col className="skills-mobile">
                <img src={sequelize} alt='sequelize' className='skills-icon-mobile'/>
                <h5>Sequelize</h5>
              </Col>
            </Row>
          </Container>
          </> : 
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
          <h1>my projects</h1>
            <Carousel >
              <Carousel.Item interval={7000} >
                <Container className='project'>
                  <Nav.Link href="http://good-morels.herokuapp.com/home">
                  <img src={Mushroom} alt='mushroom' className='mushroom'/>
                  </Nav.Link>
                  <Carousel.Caption>
                    <h3>good-morsels</h3>
                    <p>
                      An E-commerce web application that sells medicinal mushrooms.
                      Developed with React-Redux, PostgreSQL, NodeJS, and Express.js.
                      tilized React-Redux and local storage to create a functioning cart for authenticated users and guests.
                    </p>
                  </Carousel.Caption>
                </Container>
              </Carousel.Item>
              <Carousel.Item interval={7000} >
                <Container className='project'>
                  <Nav.Link href="https://github.com/Usuls-Usurpers/Capstone-Offline-Reader">
                    <Image rounded src={cache22} alt='cache22' className='cache22'/>
                  </Nav.Link>
                  <Carousel.Caption >
                    <h3>cache-22</h3>
                    <p>
                      A mobile and web application that enables users to save articles for offline viewing.
                      Developed with Puppeteer to scrape web pages, PWA to utilize a Service Worker to cache 
                      the web pages, a Chrome extension, Cloud Firestore, and Firebase authentication.
                    </p>
                  </Carousel.Caption>
                </Container>
              </Carousel.Item>
            </Carousel>
          </Container>
          <Container fluid className='Skills'>
            <h3>my skills</h3>
            <Row className="first">
              <Col lg="2" className="skills">
                <img src={java} alt='javaScript' className='skills-icon'/>
                <h5>JavaScript<br></br>
                  /ES2015</h5> 
              </Col>
              <Col lg="2" className="skills">
                <img src={node} alt='expressjs/nodejs' className='skills-icon'/>
                <h5>ExpressJS & NodeJS</h5>
              </Col>
              <Col lg="2" className="skills">
                <img src={reactIcon} alt='react' className='skills-icon'/>
                <h5>ReactJS</h5>
              </Col>
              <Col lg="2" className="skills">
                <img src={reduxIcon} alt='redux' className='skills-icon'/>
                <h5>Redux</h5>
              </Col>
              <Col lg="2" className="skills">
                <img src={htmlCss} alt='htmlcss' className='skills-icon'/>
                <h5>html5/css3</h5>
              </Col>
              <Col lg="2" className="skills">
                <img src={agile} alt='agile' className='skills-icon'/>
                <h5>Agile Framework</h5>
              </Col>
            </Row>
            <Row className="second">
              <Col lg="2" className="skills">
                <img src={responsive} alt='responsive web design' className='skills-icon'/>
                <h5>Responsive Web Design</h5>
              </Col>
              <Col lg="2" className="skills">
                <img src={git} alt='git' className='skills-icon'/>
                <h5>Git & GitHub Workflow</h5>
              </Col>
              <Col lg="2" className="skills" >
                <img src={gcp} alt='gcp' className='skills-icon'/>
                <h5>Google Cloud Platform</h5>
                {/* <ul id="gcp-skill">
                  <li>Cloud Firestore</li>
                  <li>Firebase</li>
                  <li>Compute Engine VM Instances</li>
                </ul> */}
              </Col>
              <Col lg="2" className="skills">
                <img src={postgres} alt='postgres' className='skills-icon'/>
                <h5>PostgreSQL</h5>
              </Col>
              <Col lg="2" className="skills">
                <img src={webpack} alt='webpack' className='skills-icon'/>
                <h5>Webpack</h5>
              </Col>
              <Col lg="2" className="skills">
                <img src={sequelize} alt='sequelize' className='skills-icon'/>
                <h5>Sequelize</h5>
              </Col>
            </Row>
            </Container>
            <Container fluid className="main-footer">
              <Container>
                <Row>
                  <Col>
                    <h4>Victoria</h4>
                      <IconContext.Provider value={{ className: 'footer-icons' }}>
                        <MdMailOutline onClick={() => handleClick('mailto:victoriahjeon@gmail.com')} />
                        <DiGithubBadge onClick={()=> handleClick('https://github.com/hmj248')} />
                        <IoLogoLinkedin onClick={()=> handleClick('https://linkedin.com/in/victoria-jeon')} />
                      </IconContext.Provider>
                  </Col>
                </Row>
              </Container>
                <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Victoria's Website - All Rights 
                Reserved
                </p>
            </Container>
          </>}
     </div>
    )
  }

export default App;
