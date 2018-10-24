import React, { Component } from 'react';
import "./classics.json";
import List from "../components/List";
import classics from "./classics.json";

class ClassicMysteries extends Component {
  state = { classics };


  // Map over this state and render a card component for each object
  render() {
    return (
      <section>
        <div className="hero is-fullheight is-dark is-bold">
            <div className="hero-head">
            <div className="container">
            <br></br>
            <h1 className="title is-spaced">Classic Theories & Unsolved Mysteries</h1>
            </div>
            <br></br>
              <div className="container">
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
              ))}
              </div>
          </div>
        </div>
      </section>
    );
  }
};

export default ClassicMysteries;