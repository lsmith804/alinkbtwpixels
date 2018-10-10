import React, { Component } from 'react';
//import MemberCard from './MemberCard';
//import axios from "axios";
//import List from "./List";
//import Wrapper from "./Wrapper";
import "./Members.css";
import WidgetBot from '@widgetbot/react-embed'
import axios from "axios";





class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      realname: "",
      username: "",
      favoriteGame: "",
      aboutMe: "",
      photo: ""
    };
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state) {
     axios.post("/register", {
        realname: this.state.realname,
        username: this.state.username,
        favoriteGame: this.state.favoriteGame,
        aboutMe: this.state.aboutMe,
        photo: this.state.photo
      })
      .then(res => this.state)
      .then(alert(`New user ${this.state.username} Saved!`));
    }

  };

render() {
  return (
    <div className="section">
      <form onSubmit={this.handleSubmit}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Name</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="Name" value={this.state.realname} onChange={this.handleChange} name="realname"></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div className="field-label is-normal">
              <label className="label">Username</label>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="NewPerson123" value={this.state.username} onChange={this.handleChange} name="username"></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-headset"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Favorite Game</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input className="input" type="text" placeholder="Example: Duckhunt" value={this.state.favoriteGame} onChange={this.handleChange} name="favoriteGame"></input>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">About Me</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder="Tell us about yourself!" value={this.state.aboutMe} onChange={this.handleChange} name="aboutMe"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Photo URL</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input className="input" typ="text" placeholder="Insert a URL link to your photo!" value={this.state.photo} onChange={this.handleChange} name="photo"></input>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label">
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

    {/* <WidgetBot
        server="299881420891881473"
        channel="355719584830980096"
        onAPI={(api) => {
          /*api.on('signIn', user => {
            console.log(`Guest signed in as ${user.name}`, user)
            api.emit('sendMessage', 'Hello world')
          })*/
        }}
  </div>
  );
  };
}

export default Register;