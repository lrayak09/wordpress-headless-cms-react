import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Home from "./Home";
import React from "react";
import logo from "./logo.png";

const Header = () => {
  return (
   
    <>
 <Router>



        <nav className="navbar header-top navbar-expand-lg navbar-light bg-light">
        <Link className="nav-link" to="/"><img src={logo} className="logo" alt="My logo"/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link" to="/blogs">blogs</Link>
      </li> 
      <li className="nav-item">
       <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
 <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
          
    </Routes>
    </Router>
</>

  )
};

export default Header;