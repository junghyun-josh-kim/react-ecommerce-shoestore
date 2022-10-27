import './App.css';
import { Row, Col, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import { itemData, imgData } from './data.js';

function App() {
  const [item, setItem] = useState(itemData);
  const [img, setImg] = useState(imgData);

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
          {item.map((objs, i) => {
            return <Item item={item} img={img} i={i} />;
          })}

          {/* <Col>
            <img src='/img/shoe-001.jpg' width='80%' />
            <h4>{item[0].title}</h4>
            <p>{item[0].description}</p>
            <p>{item[0].price}</p>
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
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

function Item(props) {
  return (
    <Col>
      <img src={props.img[props.i].imgPath} width='80%' />
      <h4>{props.item[props.i].title}</h4>
      <p>{props.item[props.i].description}</p>
      <p>{props.item[props.i].price}</p>
    </Col>
  );
}

export default App;
