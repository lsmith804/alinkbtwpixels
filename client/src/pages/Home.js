import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="hero is-success is-fullheight">
      <div className="hero-head">
        <div className="container has-text-centered">
          <h1>Welcome!</h1>
        </div>
        
        <h2>Newcomers:</h2>
        <ul>
        <li><img src="https://discordbots.org/api/widget/484402218502455316.svg"></img></li>
        <li><img src="https://discordbots.org/api/widget/497446442747691018.svg"></img></li>
        <li><img src="https://discordbots.org/api/widget/497446442747691018.svg"></img></li>
        </ul>



      
      

      </div>

    </div>
    );
  }
}
export default Home;