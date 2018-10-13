import React, { Component } from 'react';
import "./classics.json";
import List from "../components/List";
import classics from "./classics.json";

class ClassicMysteries extends Component {
  state = { classics };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <section>
        <div className="container">
        <div className="hero is-small is-info is-bold">
          <div className="hero-body">Classic Theories & Unsolved Mysteries</div>
        </div>
          <div >
          {this.state.classics.map(classic => (
            <List
              id={classic.id}
              key={classic.key}
              name={classic.name}
              image={classic.image}
              summary={classic.summary}
              furtherTitle={classic.furtherTitle}
              furtherURL={classic.furtherURL}

            />
          ))}</div>
          </div>
      </section>
    );
  }

};





export default ClassicMysteries;