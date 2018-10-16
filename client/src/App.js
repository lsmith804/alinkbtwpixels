// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Side from './components/Side';
import Top from './components/Top';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import ClassicMysteries from './pages/ClassicMysteries';
import NewMysteries from './pages/NewMysteries';
import SomethingCool from './pages/SomethingCool';
import UserSubmissions from './pages/UserSubmissions';
import Chat from './pages/Chat';
import NewSubmission from './pages/NewSubmission';
import Refer from './pages/Refer';
import Contact from './pages/Contact';
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
          <Route exact path='/login' component={Home}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/aboutus' component={AboutUs}/>
          <Route exact path='/classicmysteries' component={ClassicMysteries}/>
          <Route exact path='/newmysteries' component={NewMysteries}/>
          <Route exact path='/userSubmissions' component={UserSubmissions}/>
          <Route exact path='/newsubmission' component={NewSubmission}/>
          <Route exact path='/chat' component={Chat}/>
          <Route exact path='/refer' component={Refer}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/somethingcool' component={SomethingCool}/>
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
