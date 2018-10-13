import React, { Component } from 'react';
import "./UserSubmissions.css";
//import axios from "axios";

class UserSubmissions extends Component {
  constructor(props){
    super(props);
    this.state = {
      members: ["member1"]
    }
  }

  //Mount component
  componentDidMount(){
    this.getMembers();
    console.log("User theories loaded");
  }

  //What does "getMembers do?" This! Gets all books
  getMembers = async () => {
    const res = await fetch("/profiles/all")
    const members = await res.json()
    this.setState({ members: members.data })
  };


  render() {
    const { members } = this.state;

    return (
      <section>
        <div className="hero is-small is-info is-bold">
          <div className="hero-body">User-Submitted Theories & Findings</div>
        </div>
        <div id="entries" className="column is-centered">

        <div className="column is-10 is-offset-2">
            {members.map((item, index) => {
              return(
                <div key={index} className="is-clipped">
                  <div className="card">
                    <div className="media-content">
                      <img src={item.photo} style={{width: 100, height: 100}}/>
                      <p>Subject: {item.subject}</p>
                      <p>Author: {item.username}</p>
                      <p>Game: {item.game}</p>
                      <p>Theory: {item.entry}</p>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              );
            })}</div>
        </div>
    </section>

    );

  };
}

export default UserSubmissions;