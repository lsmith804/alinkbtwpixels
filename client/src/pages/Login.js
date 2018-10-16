import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

class Login extends Component {


  componentDidMount(){
    console.log("Dash Loaded!");
  }

  render() {
    return (
    <div className="hero is-fullheight has-bg-img" id="splash">
      <div className="container has-text-centered">
      <h1 className="title" id="return">Sign In</h1>
      <div className="field">
      <p className="control has-text-centered">
      <i className="fab fa-discord fa-2x"></i>  <input class="input" type="email" placeholder="Email" style={{width: 300}}></input>

      </p>
      </div>
      <div className="field">
      <p className="control has-text-centered">
      <i className="fas fa-lock fa-2x"></i>  <input class="input" type="password" placeholder="Password" style={{width: 300}}></input>
      </p>
      </div>      

      <Link to={'./dashboard'}><button class="button">Enter</button></Link>
      </div>
    </div>
    );
  }
}
export default Login;

