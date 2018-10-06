import React, { Component } from 'react';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: [
        "Headline 1",
        "Headline 2",
        "Headline 3"
      ]
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/list')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="container">
        <h1>Top Headlines</h1>
        <h2>Will probably do something different with this later...</h2>
          <div>
            {list.map((item) => {
              return(
                <div>{item}</div>
              );
            })}
          </div>
      </div>
    );
  }
}

export default List;