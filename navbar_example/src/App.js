import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {Home} from './Home';
import {Features} from './Features';
import {Login} from './Login';


function App() {
  const [value,setValue] = useState(true);
  const loginHandler=()=>
  {

      setValue(!value);
  }
  return (
    <div className="App">
      
      <Router>
      {value?
      <div>
      <Navbar/>
      <Navbar bg="primary" variant="dark">
        <Container id= 'cont'>
          <Navbar.Brand id='title'>Drone dynamics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='btn1' as={Link} to='/'>Home</Nav.Link>
            
            <Nav.Link className='btn1' as={Link} to='/Features'>Features</Nav.Link>
            <Nav.Link className='btn1' as={Link} to='/'>Pricing</Nav.Link>
            <Nav.Link onClick={loginHandler}>{value ? "Logout" : "Login"}</Nav.Link>
          </Nav>
          
        </Container>
        <Form className="d-flex">
            <Form.Control type="search" placeholder="Search"/>
              <button id ='btn3'>search</button>
            </Form>
          <NavDropdown title="profile" id="drop">
              <NavDropdown.Item as={Link} to='/Login'>Logout</NavDropdown.Item>
              </NavDropdown>
          
      </Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Features' element={<Features/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
      </div> :
      <Login/> }
      
      </Router>
      
      
      
    </div>  );
}

export default App;
