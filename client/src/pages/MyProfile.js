import React, { Component } from 'react';
import MemberCard from '../components/MemberCard'; 
import members from "../members.json" //change this to a sample profile

import axios from "axios";

class MyProfile extends Component {
  state = {
    members,
  };


// componentDidMount(){
//   this.getProfiles().then((res) => {
//     console.log(res.data);
//   });
// }

//  // Gets all books
//   getProfiles = () => {
//     return axios.get("/profiles/all");
//   };



  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }


  //Handle clicks! More to come.
  handleClick = event => {
    event.preventDefault();
    event.target.selected = true;
    let member = event.target.name;  
    console.log(member);
  }
 
  render() {
    return (

      <div className="container">


              <div className="container" id="savedProfile">
        <div className="tile is-block">
          <div className="tile-image">
          <figure className="image is-2by2">
            <div><img src={this.state.photo} style={{width: 100, height: 100}}/></div>
          </figure>
          </div>
          <div className="media-content">
            <p>Subject: {this.state.subject}</p>
            <p>Username: {this.state.username}</p>
            <p>Game: {this.state.game}</p>
            <p>Entry: {this.state.entry}</p>
          </div>
        </div>
    <hr></hr>
  </div>
      </div>
    );
  };
}

export default MyProfile;
