import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "../Side";
import "./Side.css";


const Side = () =>

<aside className="menu">
  <p className="menu-label">
    Welcome
  </p>
  <ul className="menu-list">
    <li><Link to={'./dashboard'}>Dashboard</Link></li>
    <li><Link to={'./myprofile'}>My Profile</Link></li>
  </ul>
  <p className="menu-label">
    Theorize
  </p>
    <ul className="menu-list">
    <li><Link to={'./classicmysteries'}>Classic Mysteries</Link></li>
    <li><Link to={'./newmysteries'}>New Mysteries in 2018</Link></li>
    <li><Link to={'./famous'}>Something Cool</Link></li>
  </ul>
  <p className="menu-label">
    Social
  </p>
  <ul className="menu-list">
    <li><Link to={'./members'}>Members List</Link></li>
    <li><Link to={'./chat'}>Chat</Link></li>
    <li><a>Refer a Friend</a></li>
    <li><a>Contact Us</a></li>
  </ul>

</aside>


export default Side;