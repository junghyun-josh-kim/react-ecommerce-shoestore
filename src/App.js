import './App.css';
import { Row, Col, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { itemData, imgData } from './data.js';
import Detail from './routes/Detail.js';

function App() {
  const [item, setItem] = useState(itemData);
  const navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container className='navbar'>
          <Navbar.Brand href='/' className='logo'>
            Josh's Shoes
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <button
                onClick={() => {
                  let copyItem = [...item];
                  copyItem.sort((a, b) => {
                    let ta = a.title.toLowerCase();

                    let tb = b.title.toLowerCase();

                    if (ta < tb) {
                      return -1;
                    }
                    if (ta > tb) {
                      return 1;
                    }
                    return 0;
                  });
                  setItem(copyItem);
                }}
              >
                Sort
              </button>
              <Container>
                <Row>
                  {item.map((objs, i) => {
                    return <Item item={item[i]} i={i} key={i} />;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path='/detail/:id' element={<Detail item={item} />} />

        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  );
}

function Item(props) {
  return (
    <Col>
      <img src={props.item.imgPath} width='80%' />
      <h4>{props.item.title}</h4>
      <p>{props.item.description}</p>
      <p>{props.item.price}</p>
    </Col>
  );
}

function About() {
  return (
    <div>
      <h4>ABOUT</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
