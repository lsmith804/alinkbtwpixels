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
        <section className="hero is-light">
          <div class="hero-body">
            <div className="container">
                <h1 class="title">
                  Contact Us
                </h1>
                <ul>
                  <li><a href="emailto:lori.smith@richmond.edu"><i class="fas fa-envelope fa-4x"></i>  Email Us</a></li>
                  <li><a href="https://www.linkedin.com/in/lori-smith-a5a67517/"><i class="fab fa-linkedin fa-4x"></i>  LinkedIn</a></li>

                  
                </ul>
            </div>
          </div>
        </section>             
      </div>
    );
  };
}

export default Contact;
