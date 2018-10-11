// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import Side from './components/Side';
import Top from './components/Top';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import ClassicMysteries from './pages/ClassicMysteries';
import NewMysteries from './pages/NewMysteries';
import Famous from './components/Famous';
import UserTheory from './pages/UserTheory';
import Chat from './pages/Chat';
import Register from './pages/Register';
import List from './components/List';
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
          <Route exact path='/dashboard' component={Home}/>
          <Route exact path='/myprofile' component={MyProfile}/>
          <Route exact path='/famous' component={Famous}/>
          <Route exact path='/classicmysteries' component={ClassicMysteries}/>
          <Route exact path='/newmysteries' component={NewMysteries}/>
          <Route exact path='/members' component={UserTheory}/>
          <Route exact path='/chat' component={Chat}/>
          <Route exact path='/list' component={List}/>
          <Route exact path='/register' component={Register}/>

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
