// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import Side from './components/Side';
import Top from './components/Top';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ClassicMysteries from './pages/ClassicMysteries';
import NewMysteries from './pages/NewMysteries';
import SomethingCool from './pages/SomethingCool';
import UserSubmissions from './pages/UserSubmissions';
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
          <Route exact path='/aboutus' component={AboutUs}/>
          <Route exact path='/somethingcool' component={SomethingCool}/>
          <Route exact path='/classicmysteries' component={ClassicMysteries}/>
          <Route exact path='/newmysteries' component={NewMysteries}/>
          <Route exact path='/userSubmissions' component={UserSubmissions}/>
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
