import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div id = "wrapper">
        <div class="row">
          <div class="col-12" >
            <iframe id = "map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.560398076275!2d36.811132268438676!3d-1.3070570360146792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f6010ace9b%3A0x2ed8412115331950!2sStrathmore+University!5e0!3m2!1sen!2ske!4v1524219689848" 
             allowfullscreen></iframe>
          </div>
        </div>
        <div id = "top">
          <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Unganishi</a>
              </div>
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="#">Log Out</a></li>
                </ul>
                <form class="navbar-form navbar-left">
                  <div class="form-group">
                    {/* <input type="text" class="form-control" placeholder="Search"> */}
                  </div>
                  <button type="submit" class="btn btn-default">Submit</button>
                </form> 
              </div>
            </div>
          </nav> 
        </div>
        <div id = "left-sidebar">
          <ul class="list-group">
            <li class="list-group-item">Username</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div id = "right-sidebar">
          <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </div>      
    );
  }
}

export default App;
