import React from "react";
import "./Chat.css";

const Chat = props =>
<section className="hero is-small is-bold" id="discord">
  <div className="hero-body">
    <h1 className="title">Discord Server: GM&T</h1>
    <h2 className="subtitle">
      Please play nicely on our discord server. {"<3"}
    </h2>
  </div>
  <div className="container">
    <iframe src="https://titanembeds.com/embed/497256090707165184" height="500" width="900" frameborder="0" id="chatroom"></iframe>
  </div>

</section>;

export default Chat;