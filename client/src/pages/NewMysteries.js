import React, { Component } from 'react';

class NewMysteries extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getArticles();
  }

  // Retrieves the list of items from the Express app
  getArticles = () => {
    console.log("article scraper coming soon");
    //fetch getarticles
  }

  render() {
    const { list } = this.state;

    return (
      <section className="hero is-small is-info is-bold">
      <div className="hero-body">New in 2018</div>
          <div className="container">
            NEW/trending theories will appear here!
        </div>
  </section>
    );
  }
}

export default NewMysteries;