import React, { Component } from 'react';
import MemberCard from './MemberCard';
import members from "../members.json"
import axios from "axios";
import List from "./List";
import Wrapper from "./Wrapper";

class Members extends Component {
  constructor(props){
    super(props);
    this.state = {
      members: ["member1"]
    }
  }

//Mount component
componentDidMount(){
  this.getMembers();
  console.log("members: " + members.length)
}

//What does "getMembers do?" This! Gets all books
getMembers = async () => {
  const res = await fetch("/profiles/all")
  const members = await res.json()
  this.setState({ members: members.data })
};

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
// handleClick = event => {
//     event.preventDefault();
//     event.target.selected = true;
//     let member = event.target.name;  
//     console.log(member);
// }
 
render() {
  const { members } = this.state;

  return (
    <div className="container">
      <h1>{this.props.children}</h1>
      <h2>{this.props.children}</h2>
        <div>
          {members.map((item, index) => {
            return(
              <div>
              <div key={index}>{item.realname}</div>
              <div key={index}>{item.username}</div>
              <div key={index}>{item.favoriteGame}</div>
              <div key={index}>{item.aboutMe}</div>

              </div>
            );
          })}
        </div>
    </div>
  );

  };
}

export default Members;
