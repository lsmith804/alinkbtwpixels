import React, { Component } from 'react';
import "./classics.json";
import List from "../components/List";
import classics from "./classics.json";

class ClassicMysteries extends Component {
  state = { classics };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="container">
        <h2>Classics List</h2>
        {this.state.classics.map(classic => (
          <List
            id={classic.id}
            key={classic.id}
            name={classic.name}
            image={classic.image}
          />
        ))}
      </div>
    );
  }

};





export default ClassicMysteries;