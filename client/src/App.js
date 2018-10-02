// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import './App.css';

import Top from './components/Top';
import Side from './components/Side';
import Main from './components/Main';
import Chat from './components/Chat/Chat';
import Journal from './components/Journal/Journal';


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Top/>
//         <Side/>
//         <Main/>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Side/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
