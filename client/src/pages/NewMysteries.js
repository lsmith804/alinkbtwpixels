import React, { Component } from 'react';
const bodyParser = require("body-parser");
const logger = require("morgan");


class NewMysteries extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
  
    console.log("New Mysteries component loaded.");
  }


  render() {
    const { articlesListTwo } = this.state;

    return (
      <section>
        <div className="hero is-small is-info is-bold">
          <div className="hero-body">New & Trending</div>
            <iframe id="embededSite" src="http://www.reddit.com" width="100%" height="100%" >
              <p>Your browser does not support iframes.</p>
            </iframe>
        </div>
        <div id="entries" className="column is-centered">
        


        </div>
      </section>
    );
  }
}

export default NewMysteries;