import React, { Component } from 'react';
import Logo from './Components/Logo/Logo';
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Heading from './Components/Heading/Heading';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Switch,Route } from 'react-router-dom'
import Home from './Components/Dashboard/Home'




class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Signin}/>
        <Route path='/register' component={Register}/>
      </Switch>

      </div>
    );
  }
}

export default App;
{/* <Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/roster' component={Roster}/>
  <Route path='/schedule' component={Schedule}/>
</Switch> */}
      {/* <Register/> */}
      {/* <Signin/> */}

{/* <Navigation/>
<Logo/>
<Heading/>
<MapWithAFusionTablesLayer isMarkerShown/> */}