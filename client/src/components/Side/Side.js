import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../Side";
import "./Side.css";


const Side = () =>

<aside className="menu" id="sidebar">
  <p className="menu-label">
    Welcome
  </p>
  <ul className="menu-list">
    <li><Link to={'./dashboard'}>Dashboard</Link></li>
    <li><Link to={'./aboutus'}>About Us</Link></li>
  </ul>
  <p className="menu-label">
    Theorize
  </p>
    <ul className="menu-list">
      <li><Link to={'./classicmysteries'}>Classic Mysteries</Link></li>
      <li><Link to={'./newmysteries'}>New Mysteries in 2018</Link></li>
      <li><Link to={'./userSubmissions'}>User Submissions</Link></li>
      <li><Link to={'./newsubmission'}>Submit Your Own</Link></li>
    </ul>
  <p className="menu-label">
    Social
  </p>
  <ul className="menu-list">
    <li><Link to={'./chat'}>Chat</Link></li>
    <li><Link to={'./refer'}>Share</Link></li>
    <li><Link to={'./contact'}>Contact Us</Link></li>


  </ul>
    <p className="menu-label">
    More
  </p>
  <ul className="menu-list">
    <li><Link to={'./somethingcool'}>Something Cool</Link></li>
  </ul>

</aside>


export default Side;