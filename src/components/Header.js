import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="/Home" style={{color:"white"}} >Start Up</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href=' ' style={{color:"white"}} onClick={logout} >logout</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header

