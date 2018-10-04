import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "../Side";
import "./Side.css";


const Side = props =>

<aside className="menu">
  <p className="menu-label">
    Welcome
  </p>
  <ul className="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Personal Profile</a></li>
  </ul>
  <p className="menu-label">
    Theorize
  </p>
    <ul className="menu-list">
    <li><a>Classic Mysteries</a></li>
    <li><a>New Mysteries in 2018</a></li>
    <li><a>Post a NEW Theory</a></li>
    <li><a>BETA: Famous Characters List</a></li>
  </ul>
  <p className="menu-label">
    Social
  </p>
  <ul className="menu-list">
    <li><a>Members List</a></li>
    <li><a>Chat</a></li>
    <li><a>Refer a Friend</a></li>
  </ul>

</aside>


export default Side;