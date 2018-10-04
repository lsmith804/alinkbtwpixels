// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import Top from './components/Top';
import Side from './components/Side';
import Articles from './pages/Articles';
import Home from './pages/Home';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Famous from './pages/Famous';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Top/>
        <Side/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/famous' component={Famous}/>
          <Route exact path='/articles' component={Articles}/>
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
