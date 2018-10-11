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
                Spread the word about GM&T!
                </h1>
            </div>
            <ul>
            <li><i class="fab fa-facebook-square fa-5x"></i></li>
            <li><i class="fab fa-facebook-messenger fa-5x"></i></li>
            <li><i class="fab fa-twitter-square fa-5x"></i></li>
            <li><i class="far fa-share-square fa-5x"></i></li>
          </ul>    
          </div>
        </section>             
      </div>
    );
  };
}

export default Refer;
