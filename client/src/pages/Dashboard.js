import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Axios from 'axios';
import "./Dashboard.css";

//Dashboard/welcome area of useful info. Popular games, hello from bot, etc

class Dashboard extends Component {
  constructor(props){
    super(props);
      this.state = {
        popular: []
      }
  }

  componentDidMount(){
    //this.getPopular();
    console.log("Dash Loaded!");
  }

  // getPopular = async () => {
  //   const res = await fetch("/populargames")
  //   const popular = await res.json()
  //   this.setState({ popular: popular.data})
  // };

  render() {
    {/*const { popular } = this.state; */}


    return (
    <div className="hero is-fullheight">


      <div className="hero-head">
        <div className="container has-text-centered">
          <h1 className="title">Welcome!</h1>
          <h2 className="subtitle">A Link Between Pixels is your place to chat, read up on current gaming theory news, and post your own findings.</h2>
            <iframe src="https://discordapp.com/widget?id=497256090707165184&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
            <p>Chat with friends and our helpful chatbots <Link to={'./chat'}>here!</Link></p>
        </div>
      </div>

      {/*Display most popular current games  */}
    {/*  <div className="column is-10 is-offset-2">

            {popular.map((item, index) => {
              return(
                <div key={item.index} className="is-clipped">
                  <div className="card">
                    <div className="media-content">
                      <p>Game: {item.name}</p>
                      <p>Pop: {item.popularity}</p>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              );
            })}

            </div>*/}
          </div>
    );
  }
}
export default Dashboard;