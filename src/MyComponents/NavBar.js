import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import logo from "./logo.png";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Home from "./Home";


export default function NavBar() {
  return (
    <div>
      
   
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand className="Hello" href="#home"><img src={logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Router>
    <Navbar.Collapse id="basic-navbar-nav">
    
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    
    </Navbar.Collapse>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
          
    </Routes>
    </Router>

  </Container>
</Navbar>




    </div>
  )
}
