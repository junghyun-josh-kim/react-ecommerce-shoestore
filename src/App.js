import './App.css';
import { Row, Col, Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container className='navbar'>
          <Navbar.Brand href='#home' className='logo'>
            Josh's Shoes
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Container>
        <Row>
          <Col>
            <img src='/img/shoe-001.jpg' width='80%' />
            <h4>Name</h4>
            <p>Description</p>
          </Col>
          <Col>
            <img src='/img/shoe-002.jpg' width='80%' />
            <h4>Name</h4>
            <p>Description</p>
          </Col>
          <Col>
            <img src='/img/shoe-003.jpg' width='80%' />
            <h4>Name</h4>
            <p>Description</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
