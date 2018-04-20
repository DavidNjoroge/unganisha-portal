import React, { Component } from 'react';
import 'react-tilt';
import './App.css';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import WelcomeText from './Components/WelcomeText/WelcomeText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <WelcomeText/>
       {/* <Maps/>
        {/*<Users/>
        <Requestings/>*/}
      </div>
    );
  }
}

export default App;
