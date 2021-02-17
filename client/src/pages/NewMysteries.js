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
  
    console.log("New /Trending Mysteries component loaded.");
  }


  render() {
    const { articlesListTwo } = this.state;

    return (
      <section>
        <div className="hero is-fullheight is-dark is-bold">
          <div className="hero-head">
            <div className="container">
              <br></br>
              <h1 className="title is-spaced">New & Trending</h1>
              <h2 className="subtitle">The original inspiration for ALBP! Trending videos in this list usually include theories from MatPat, YuriOfWind, and Zeltik.</h2>
              <br></br>
              <div className="container has-text-centered">
              <iframe id="ytplayer" type="text/html" width="720" height="405"
              src="https://www.youtube.com/embed/?list=PLEoNm5tWtnivb0igEwS4GeGvnOkVALM08&listType=playlist"
              frameBorder="0" allowFullScreen></iframe>
              <ul>
                  <li><a href="https://www.youtube.com/user/MatthewPatrick13" target="_blank" className="has-text-success"><i className="fab fa-youtube fa-2x"></i>  MatPat</a></li>
                  <li><a href="https://www.youtube.com/user/Yuriofwind" target="_blank" className="has-text-primary"><i class="fab fa-youtube fa-2x"></i>  YuriOfWind</a></li> 
                  <li><a href="https://www.youtube.com/channel/UCudx6plmpbs5WtWvsvu-EdQ" target="_blank" className="has-text-info"><i class="fab fa-youtube fa-2x"></i>  Zeltik</a></li>
              </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default NewMysteries;