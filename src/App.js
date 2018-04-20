import React, { Component } from 'react';
import Logo from './Components/Logo/Logo';
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Heading from './Components/Heading/Heading';
import  { compose, withProps } from "recompose";
import 'tachyons';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  FusionTablesLayer,
} from "react-google-maps";

const MapWithAFusionTablesLayer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className= 'fl w-third' style={{ height: `400px`, width:`100%`  }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 41.850033, lng: -87.6500523 }}
  >
    <FusionTablesLayer
      url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
      options={{
        query: {
          select: `Geocodable address`,
          from: `1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg`
        }
      }}
    />
  </GoogleMap>
);




class App extends Component {
  render() {
    return (
      <div className="App">
      <Register/>
      <Signin/>
      <Navigation/>
      <Logo/>
      <Heading/>
      <MapWithAFusionTablesLayer />
      </div>
    );
  }
}

export default App;
