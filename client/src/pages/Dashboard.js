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
          <h1 className="title">Welcome!</h1>
          <h2 className="subtitle">A Link Between Pixels is your place to chat, read up on current gaming theory news, and post your own findings.</h2>
            <iframe src="https://discordapp.com/widget?id=497256090707165184&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
            <p>Chat with friends and our helpful chatbots <Link to={'./chat'}>here!</Link></p>
        </div>
      </div>

    </div>
    );
  }
}
export default Dashboard;