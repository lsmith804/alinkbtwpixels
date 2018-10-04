import React, { Component } from 'react';
import characters from "../characters.json"


var famouspplNames = [];
for (var i = 0; i < characters.length; i++) {
  famouspplNames.push(characters[i].name);
};

class List extends Component {
  // Initialize the state
  state = {
    characters
  };

  // Fetch the list on first mount
  // componentDidMount() {
  //   this.getList();
  // }


  render() {
    return (
      <div className="App">
        {<h1>{famouspplNames}</h1>}

      </div>
    );
  }
}

export default List;