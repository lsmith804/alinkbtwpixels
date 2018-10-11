import React, { Component } from 'react';
//import MemberCard from './MemberCard';
import members from "../members.json"
//import axios from "axios";
//import List from "./List";
//import Wrapper from "./Wrapper";
import "./Members.css";



class UserTheory extends Component {
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
//     console.log("do something with this click");
// }
 
render() {
  const { members } = this.state;

  return (
    <section className="hero is-small is-info is-bold">
      <div className="hero-body">Members</div>
          <div className="container membas">
          {members.map((item, index) => {
            return(
              <div key={index} className="container">
                <div className="tile is-block">
                  <div className="tile-image">
                  <figure className="image is-2by2">
                    <div key={index}><img src={item.photo} style={{width: 100, height: 100}}/></div>
                  </figure>
                  </div>
                  <div className="media-content">
                    <p>Name: {item.realname}</p>
                    <p>Username: {item.username}</p>
                    <p>Favorite Game: {item.favoriteGame}</p>
                    <p>About: {item.aboutMe}</p>
                  </div>
                </div>
                <hr></hr>
              </div>

            );
          })}
        </div>
  </section>

  );

  };
}

export default UserTheory;