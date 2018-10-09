import React, { Component } from 'react';
//import MemberCard from './MemberCard';
//import axios from "axios";
//import List from "./List";
//import Wrapper from "./Wrapper";
import "./Members.css";
import WidgetBot from '@widgetbot/react-embed'




class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      username: "",
      favoriteGame: "",
      aboutMe: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
  }

// // Saves a book to the database
// saveBook: function(bookData) {
//   return axios.post("/api/books", bookData);
// }

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
          <input className="input" type="text" placeholder="Name"></input>
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </p>
      </div>
    <div className="field">
      <p className="control is-expanded has-icons-left">
        <input className="input" type="text" placeholder="NewPerson123"></input>
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
          <input className="input is-danger" type="text" placeholder="Example: Duckhunt"></input>
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
          <textarea className="textarea" placeholder="Tell us about yourself!"></textarea>
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
            Send message
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
/> */}

</div>
  );
  };
}

export default Register;