import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>random heading</h1>
      <Link to={'./list'}>
        <button variant="raised">
            My List: clik me
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;