import React, { Component } from 'react';

class Wrapper extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: [
        "List item 1",
        "List item 2"      ]
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
        <h1>{this.props.children}</h1>
        <h2>{this.props.children}</h2>
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

export default Wrapper;