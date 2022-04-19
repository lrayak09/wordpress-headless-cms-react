import React from "react";
import logo from "./logo.png";
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Footer = () => {
  return (


<div className="footermain">
    <div className="container">

        <div className="logo-footer"><img src={logo}/></div>

    <ul>
           <li><a href="https://www.facebook.com/controlf5" target="_blank"><i className="fa fa-facebook"></i></a></li> 
           <li><a href="https://www.linkedin.com/company/control-f5" target="_blank"><i className="fa fa-linkedin"></i></a></li> 
           <li><a href="https://twitter.com/controlf5india" target="_blank"><i className="fa fa-twitter"></i></a></li> 
           <li><a href="https://www.instagram.com/accounts/login/?next=/controlf5web/" target="_blank"><i className="fa fa-instagram"></i></a></li> 
           <li><a href="https://www.youtube.com/" target="_blank"><i className="fa fa-youtube"></i></a></li> 
        

    </ul>


<p className="copyright-text"> © 2022 Controlf5.in All Right Reserved.</p>

    </div>
</div>

  )
};

export default Footer;