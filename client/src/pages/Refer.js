import React, { Component } from 'react';

class Refer extends Component {

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
              Spread the word about A Link Between Pixels
              </h1>
            </div>
          </div>
        </section>             
      </div>
    );
  };
}

export default Refer;
