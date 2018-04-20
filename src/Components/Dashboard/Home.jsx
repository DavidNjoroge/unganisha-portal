import React, { Component } from 'react'
import  SidebarLeft  from "../SidebarLeft/SidebarLeft";
import  SidebarRight  from "../SidebarRight/SidebarRight";
import  MainColumn  from "../MainColumn/MainColumn";
import  { compose, withProps } from "recompose";
import 'tachyons';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  FusionTablesLayer,
  Marker
} from "react-google-maps";

const MapWithAFusionTablesLayer = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div className= 'fl w-third' style={{ height: `100vh`, width:`100%`  }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: -1.2833, lng: 36.81667   }}
    > 
      {props.isMarkerShown && <Marker position={{ lat: 41.983994270935625, lng: -87.86622762680054 }} />}
    </GoogleMap>
  );
  
  
export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2">
                    <SidebarLeft/>                
                </div>
                <div className="col-lg-8">
                    <MainColumn/>
                </div>
                <div className="col-lg-2">
                    <SidebarRight/>
                </div>
            </div>
        </div> */}
        <MapWithAFusionTablesLayer isMarkerShown/>
      </div>
    )
  }
}
