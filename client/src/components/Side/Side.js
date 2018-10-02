import React from "react";
import "../Side";
import "./Side.css";


const Side = props =>

<aside className="menu">
  <p className="menu-label">
    General
  </p>
  <ul className="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>
  <p className="menu-label">
    Administration
  </p>
  <ul className="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a className="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p className="menu-label">
    Settings
  </p>
  <ul className="menu-list">
    <li><a>Account</a></li>
    <li><a>Edit Profile</a></li>
    <li><a>Balance</a></li>
  </ul>
</aside>


export default Side;