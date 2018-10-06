import React, { Component } from 'react';
import MemberCard from './MemberCard'; 
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

      <div className="App">
          <h1 className="App-title">Members as of {Date()}</h1>
            {this.data}
      </div>
    );
  };
}

export default MyProfile;
