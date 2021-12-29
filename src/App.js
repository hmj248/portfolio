import './App.css';
import { Carousel, Navbar, Container,Offcanvas, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Victoria from './Victoria.svg';
import LinkedIn from './linkedIn.svg';

function App() {
  return (
    <div className="App">
      <Navbar bg="cream" expand="true" sticky="top">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={Victoria} alt="logo"/>
            </Navbar.Brand>
            <Nav.Link href="http://www.linkedin.com/in/victoria-jeon">
              <img src={LinkedIn} id="linkedIn-logo" alt="linkedIn-logo"/>
            </Nav.Link>
            <Nav.Link href="GitHub">
              {/* <img src/> */}
            </Nav.Link>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
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
            </Navbar.Offcanvas>
          </Container>
      </Navbar>
      <header className="App-header">
        <Carousel>
          <Carousel.Item interval={4000}>
            <img src='/Victoria.png' className='App-logo'/>
            <Carousel.Caption>
              <h3>First slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item interval={4000}>
            Slide #2
          </Carousel.Item> */}
        </Carousel>
     </header>
    </div>
  );
}

export default App;
