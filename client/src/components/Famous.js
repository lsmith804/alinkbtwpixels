import React, { Component } from 'react';
import characters from "../characters.json"


let famouspplNames = [];
for (var i = 0; i < characters.length; i++) {
  famouspplNames.push(characters[i].name);
};

// let famouspplImage = [];
// for (var i = 0; i < characters.length; i++) {
//   famouspplImage.push(characters[i].image);
// };


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