import React, { Component } from 'react';
import MemberCard from './MemberCard';
import members from "../members.json"

class Members extends Component {
  state = {
    members,
  };

  //Handle clicks!
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
            {this.state.members.map(character => (

              <MemberCard
                handleClick={this.handleClick}
                id={character.id}
                key={character.key}
                name={character.name}
                image={character.image}
                selected={character.selected}
              />
            ))}
      </div>
    );
  };
}

export default Members;
