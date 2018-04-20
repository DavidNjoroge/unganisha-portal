import React, { Component } from 'react';
import 'react-tilt';
import './App.css';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import WelcomeText from './Components/WelcomeText/WelcomeText';
import Home from './Components/Dashboard/Home';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navigation/>
        <Logo/>
        <WelcomeText/> */}
        <Home/>
       {/* <Maps/>
        {/*<Users/>
        <Requestings/>*/}
      </div>
    );
  }
}

export default App;
