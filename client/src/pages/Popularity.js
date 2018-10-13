import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//Dashboard/welcome area of useful info. Popular games, hello from bot, etc



class Popularity extends Component {
  constructor(props){
    super(props);
    this.state = {
      populars: ["Zelda"]
    }
  }
  
  componentDidMount(){
    this.getPopulars();
    console.log("Dash Loaded!");
  }
  
  getPopulars = async () => {
    const res = await fetch("/populargames")
    const populars = await res.json()
    this.setState ({ populars: populars.data })
  };

  
  
  render() {

    const { populars } = this.state;

    return (
    <div className="hero is-success is-fullheight">
      <div className="hero-head">
        <div className="container has-text-centered"> Under Construction
        </div>

        <h2>What kinds of theories do you have in mind? Here are the most popular titles, according to IGDB:</h2>
        <div className="column is-10 is-offset-2">
            {populars.map((item, id) => {
              return(
                <div key={id} className="is-clipped">
                  <div className="card">
                    <div className="media-content">
                      <p> Name: {item.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}</div>
      
      

      </div>

    </div>
    );
  }
}
export default Popularity;