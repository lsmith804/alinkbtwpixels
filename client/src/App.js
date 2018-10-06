// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import Chat from './components/Chat';
import Side from './components/Side';
import Top from './components/Top';
import Articles from './components/Articles';
import Famous from './components/Famous';
import Home from './components/Home';
import List from './components/List';
import Members from './components/Members';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';



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
          <Route exact path='/members' component={Members}/>
          <Route exact path='/chat' component={Chat}/>
          <Route exact path='/list' component={List}/>


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
