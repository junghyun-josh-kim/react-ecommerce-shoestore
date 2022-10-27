import './App.css';
import { Row, Col, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import { itemData, imgData } from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [item, setItem] = useState(itemData);
  const [img, setImg] = useState(imgData);

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container className='navbar'>
          <Navbar.Brand href='/' className='logo'>
            Josh's Shoes
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/products'>Products</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <Container>
                <Row>
                  {item.map((objs, i) => {
                    return <Item item={item[i]} img={img[i]} i={i} key={i} />;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path='/products' element={<div>PRODUCTS</div>} />
      </Routes>
    </div>
  );
}

function Item(props) {
  return (
    <Col>
      <img src={props.img.imgPath} width='80%' />
      <h4>{props.item.title}</h4>
      <p>{props.item.description}</p>
      <p>{props.item.price}</p>
    </Col>
  );
}

export default App;
