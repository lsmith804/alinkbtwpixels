import React, { Component } from 'react';

class Contact extends Component {

  //Handle clicks! More to come.
  handleClick = event => {
    event.preventDefault();
    event.target.selected = true;
    let member = event.target.name;  
    console.log(member);
  }
 
  render() {
    return (

      <div>
        <section className="hero has-text-centered">
          <div class="hero-body">
            <div className="container">
                <h1 class="title">
                  Contact the Developer
                </h1>
                <h2 className="subtitle">
                Have a question, need to report a bug, or just want to connect?</h2>
                <h2 className="subtitle">I'll try to respond as soon as possible. 😎 </h2>
                <ul>
                  <li><a href="https://twitter.com/LoriTheGreat18" target="_blank"><i className="fab fa-twitter-square fa-4x"></i><br></br>Tweet Me</a></li>
                  <li><a href="https://www.linkedin.com/in/lori-smith-a5a67517/" target="_blank"><i class="fab fa-linkedin fa-4x"></i><br></br>Connect on LinkedIn</a></li> 
                  <li><a href="emailto:lori.smith@richmond.edu" target="_blank"><i class="fas fa-envelope fa-4x"></i><br></br>Email Me</a></li>
                </ul>
            </div>
          </div>
        </section>             
      </div>
    );
  };
}

export default Contact;
