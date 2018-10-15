import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Splash.css";

class Splash extends Component {

  componentDidMount(){
    //this.getPopular();
    console.log("Dash Loaded!");
  }



  render() {
    return (
    <div className="hero is-fullheight has-bg-img" id="splash">
        <div className="hero-body">
            <div className="container has-text-centered">
            <h1 class="title">Welcome!</h1>

            <div class="field">
            <p class="control has-text-centered">
            <i class="fab fa-discord fa-2x"></i>  <input class="input" type="email" placeholder="Email" style={{width: 300}}></input>

            </p>
            </div>
            <div class="field">
            <p class="control has-text-centered">
            <i class="fas fa-lock fa-2x"></i>  <input class="input" type="password" placeholder="Password" style={{width: 300}}></input>
            </p>
            </div>      

            <Link to={'./dashboard'}><button class="button">Enter</button></Link>

            

            </div>
        </div>
    </div>
    );
  }
}
export default Splash;

