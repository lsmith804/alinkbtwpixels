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

  componentDidMount(){
    this.getMembers();
    console.log("User theories loaded");
  }

  //Collect all user submissons
  getMembers = async () => {
    const res = await fetch("/profiles/all")
    const members = await res.json()
    this.setState({ members: members.data })
  };


  render() {
    const { members } = this.state;

    return (
      <section>
        <div className="hero is-fullheight is-dark is-bold">
          <div className="hero-head">
            <div className="container">
            <br></br>
            <h1 className="title is-spaced">User-Submitted Theories & Findings</h1>
            </div>
            <br></br>
            <div className="container">
              {members.map((item, index) => {
                  return(
                    <div key={index} className="is-clipped">
                      <div className="uscard is-dark">
                        <div>
                          <img src={item.photo} style={{width: 200, height: 200}}/>
                          <p>Subject: {item.subject}</p>
                          <p>Author: {item.username}</p>
                          <p>Game: {item.game}</p>
                          <p>Theory: {item.entry}</p>
                        </div>
                      </div>
                      <hr></hr>
                    </div>
                  );
              })}
            </div>
        </div>
      </div>
    </section>

    );

  };
}

export default UserSubmissions;