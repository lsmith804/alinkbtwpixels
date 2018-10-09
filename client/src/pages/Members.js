import React, { Component } from 'react';
//import MemberCard from './MemberCard';
import members from "../members.json"
//import axios from "axios";
//import List from "./List";
//import Wrapper from "./Wrapper";
import "./Members.css";



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
  console.log("Members loaded");
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
    <div className="section">
      <h1 className="title">Members</h1>
        <div>
          {members.map((item, index) => {
            return(
              <div className="card is-block is-4by-3">
                <div className="card-image">
                <figure className="image is-2by2">
                  <div key={index}><img src={item.photo} style={{width: 100, height: 100}}/></div>
                </figure>
                </div>
                <div className="card-content">
                <div className="media-content">
                  <p key={index}>Name: {item.realname}</p>
                  <div key={index}>Username: {item.username}</div>
                </div>
                <div className="content">
                  <div key={index}>Favorite Game: {item.favoriteGame}</div>
                  <div key={index}>About: {item.aboutMe}</div>
                </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );

  };
}

export default Members;