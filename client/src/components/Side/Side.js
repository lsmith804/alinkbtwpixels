import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../Side";
import "./Side.css";


const Side = () =>

<aside className="menu" id="sidebar">
  <p className="menu-label has-background-success has-text-black">
    Welcome
  </p>
  <ul className="menu-list">
    <li><Link to={'./dashboard'}>🍍 Dashboard</Link></li>
    <li><Link to={'./aboutus'}>📖 About ALBP</Link></li>
  </ul>
  <p className="menu-label has-background-success has-text-black">
    Theory
  </p>
    <ul className="menu-list">
      <li><Link to={'./classicmysteries'}>📙 Classic Theories</Link></li>
      <li><Link to={'./newmysteries'}>🆕 New in 2018</Link></li>
      <li><Link to={'./userSubmissions'}>👥 User Submissions</Link></li>
      <li><Link to={'./newsubmission'}>✍️ Submit Your Own</Link></li>
    </ul>
  <p className="menu-label has-background-success has-text-black">
    Social
  </p>
  <ul className="menu-list">
    <li><Link to={'./chat'}>💬 Chat</Link></li>
    <li><Link to={'./contact'}>📞 Contact</Link></li>
  </ul>
    <p className="menu-label has-background-success has-text-black">
    More
  </p>
  <ul className="menu-list">
    <li><Link to={'./somethingcool'}>❔ Something Cool</Link></li>
  </ul>

</aside>


export default Side;