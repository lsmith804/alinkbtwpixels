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
                <h1 class="subtitle">
                  Holla
                </h1>
            </div>
          </div>
          <ul>
            <li>Email</li>
            <li>Discord Direct Message</li>
            <li>Linked In</li>
          </ul>
        </section>             
      </div>
    );
  };
}

export default Contact;
