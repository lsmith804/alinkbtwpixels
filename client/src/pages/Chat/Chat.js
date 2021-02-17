import React, { Component } from 'react';
import "./Chat.css";

class Chat extends Component {

render() {
  return (
    <section className="hero is-fullheight is-dark" id="discord">
      <div className="hero-head">
        <div className="container">
        <br></br>
          <h1 className="title">Discord Chat</h1>
          <h2 className="subtitle">
            It's dangerous to go alone. Let's go together. 
          </h2>
        </div>
        <br></br>
        <div className="container">
          {/* <iframe src="https://titanembeds.com/embed/497256090707165184" height="500" width="900" frameborder="0" id="chatroom"></iframe> */}
          Chat will return soon. We apologize for the inconvenience. :(
        </div>
      </div>
    </section>
  );
  };
};

export default Chat;