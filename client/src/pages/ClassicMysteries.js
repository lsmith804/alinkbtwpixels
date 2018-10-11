import React, { Component } from 'react';
import "./classics.json";

class ClassicMysteries extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  render() {
    const { list } = this.state;

    return (
      <section className="hero is-small is-info is-bold">
      <div className="hero-body">Classic Theories</div>
          <div className="container">
            <ul>
              <li>
                One
              </li>
            </ul>
        </div>
  </section>
    );
  }
}

export default ClassicMysteries;