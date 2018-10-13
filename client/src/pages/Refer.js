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
            <li><iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fgamingmysteries.herokuapp.com&layout=button&size=large&mobile_iframe=true&width=73&height=28&appId" width="73" height="28" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe></li>
            <li><i class="fab fa-twitter-square fa-3x"></i></li>
            <li><i class="far fa-share-square fa-3x"></i></li>
          </ul>    
          </div>
        </section>             
      </div>
    );
  };
}

export default Refer;
