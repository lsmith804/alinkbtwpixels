import React, { Component } from 'react';

class ClassicMysteries extends Component {
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
      <div className="hero-body">Classic Theories</div>
          <div className="container">
            CLASSIC mysteries will appear here!
        </div>
  </section>
    );
  }
}

export default ClassicMysteries;