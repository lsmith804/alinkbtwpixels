import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component {

  //Handle clicks! More to come.
  handleClick = event => {
    event.preventDefault();
    event.target.selected = true;
    let member = event.target.name;  
    console.log(member);
  }
 
  render() {
    return (
      <section className="hero is-dark is-fullheight">
        <div class="hero-head">
          <div className="container">
          <br></br>
            <h1 className="title is-spaced">About</h1>
            <h2 className="subtitle"></h2>
            <br></br>
            <div>
            <p className="p"><strong>THANK YOU</strong> for visiting A Link Between Pixels, your number one source for researching and sharing oddities in video games! ALBP is dedicated to keeping you informed, providing information for newcomers, and helping you connect with fellow theorists.</p><br></br>

            <p>Launched in 2018, ALBP has come a long way from its beginnings in the comments sections of MatPat's Game Theory and YuriOfWind's Gaming Mysteries. That's right! ALBP was born from the thrill that comes from reading up on the latest video game theories and mysteries.</p><br></br>

            <p>I hope you enjoy ALBP as much as I enjoy offering this platform. If you have any questions or comments, please don't hesitate to <Link to={"./contact"} className="has-text-success link"> contact me.</Link></p><br></br>

            <p>
            Sincerely,<br></br>
            Lori ^_^
            </p>
            </div>
          </div>
        </div>  
      </section>
    );
  };
}

export default AboutUs;
