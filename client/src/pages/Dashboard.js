import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from "../components/List";


//Dashboard/welcome area of useful info. Popular games, hello from bot, etc



class Dashboard extends Component {
  
  componentDidMount(){
    console.log("Dash Loaded!");
  }

  render() {

    return (
    <div className="hero is-success is-fullheight">
      <div className="hero-head">
        <div className="container has-text-centered">
          <h1>Welcome!</h1>

        
        <h2>Newcomers:</h2>
        <ul>
        <li><img src="https://discordbots.org/api/widget/484402218502455316.svg"></img></li>
        <li><img src="https://discordbots.org/api/widget/497446442747691018.svg"></img></li>
        <li><img src="https://discordbots.org/api/widget/497446442747691018.svg"></img></li>
        </ul>    

      
        </div>
      </div>

    </div>
    );
  }
}
export default Dashboard;