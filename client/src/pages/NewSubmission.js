import React, { Component } from 'react';
//import axios from "axios";
//import List from "./List";
//import Wrapper from "./Wrapper";
import "./NewSubmission.css";
import WidgetBot from '@widgetbot/react-embed'
import axios from "axios";

class NewSubmission extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject: "",
      username: "",
      game: "",
      entry: "",
      photo: ""
    }
    this.baseState=this.state;
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
        subject: this.state.subject,
        username: this.state.username,
        game: this.state.game,
        entry: this.state.entry,
        photo: this.state.photo
      })
      .then(res => this.state)
      .then(alert(`New user ${this.state.username} Saved!`));
    }

  };

  resetForm = event => {
    event.preventDefault();
    this.setState(this.baseState);
  }


render() {
  return (
    <div className="section">
      <form onSubmit={this.handleSubmit} id="memberForm">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Subject</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="What is this about?" value={this.state.subject} onChange={this.handleChange} name="subject"></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-file"></i>
                </span>
              </p>
            </div>
            <div className="field-label is-normal">
              <label className="label">Username</label>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="Leave blank to stay anonymous!" value={this.state.username} onChange={this.handleChange} name="username"></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-headset"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Game</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input className="input" type="text" placeholder="What game(s) does this involve?" value={this.state.game} onChange={this.handleChange} name="game"></input>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Entry</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder="Explain your theory, discovery, or findings." value={this.state.entry} onChange={this.handleChange} name="entry"></textarea>
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
                <hr></hr>
                <p>Changed your mind?</p>
                <button className="button is-primary" onClick={this.resetForm}>
                  Reset
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
        }
  </div>
  );
  };
}

export default NewSubmission;