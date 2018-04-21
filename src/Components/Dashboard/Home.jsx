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
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {loadRequest} from '../../actions/dashboardActions'
// const MarkerClusterer = require("react-google-maps/lib/components/addons/MarkerClusterer");
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";

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
      defaultZoom={13}
      defaultCenter={{ lat: -1.2833, lng: 36.81667   }}
    > 
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.reference}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}
    </MarkerClusterer>
      {/* {props.isMarkerShown && <Marker position={{ lat: -1.2731795, lng: 36.8600088000001 }} />} */}
    </GoogleMap>
  );
  
  
class Home extends Component {
    constructor(props){
        super(props)
        this.state ={
            ambulances:[]
        }
    }
    componentWillMount(){
        this.props.loadRequest()
    }
    componentWillReceiveProps(nextProps){
        this.setState({ambulances:nextProps.ambulances.ambulances})
        console.log("Home received props",nextProps.ambulances.ambulances);
        
    }
  render() {
    return (
      <div>
        <div className="container-fluid">
            <div className="row">
                <nav className='navbar navbar-inverse'>
                    <div className="navbar-header">
                        <h1 className='navbar-brand'>UNGANISHA</h1>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="login">log out</a>
                    </li>
                    </ul>

                </nav>
            </div>
            <div className="row">
                <div className="col-lg-2">
                    <SidebarLeft/>                
                </div>
                <div className="col-lg-8">
                    {/* <MainColumn/> */}
                    <MapWithAFusionTablesLayer markers={this.state.ambulances} isMarkerShown/>
                    
                </div>
                <div className="col-lg-2">
                    <SidebarRight/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
const mapStateToProp = state =>{

    return {
        requ:state.requ,
        ambulances:state.ambulance
    }
}
Home.propTypes = {
    requ:PropTypes.object,
    ambulances:PropTypes.object

}
export default connect(mapStateToProp,{loadRequest})(Home)