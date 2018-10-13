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
        <iframe src="https://discordapp.com/widget?id=497256090707165184&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>

      
        </div>
      </div>

    </div>
    );
  }
}
export default Dashboard;