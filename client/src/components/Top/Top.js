import React from "react";
import "../Top";
import "./Top.css";


const Top = props =>
<section className="hero is-bold is-small" id="bannerbackground">
  <div className="hero-body">
      <h1 className="title" id="siteheader">
        A Link Between Pixels
      </h1>
      <h2 className="subtitle">
        For gamers who love to explore the weird & mysterious side of games. ^_^</h2>
      <span className="icon"><i className="fab fa-twitter-square"></i><a href="https://twitter.com/LoriTheGreat18" target="_blank"></a></span>
  </div>
</section>;

export default Top;