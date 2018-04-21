import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class SidebarRight extends Component {
  constructor(props){
    super(props)
    this.state = {
      ambulances:[]
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({ambulances:nextProps.ambulances.ambulances})
  }
  render() {
    let amb = []
    for (let item of this.state.ambulances){
      amb.push(
        <li className="list item">{item.reference} : {item.status}</li>        
      )
    }
    return (
      <div>
         <div className="well">
            <h2>Ambulances</h2>
            <ul className="list group">
            {amb}
            </ul>
        </div>
        {/* <div className="well">
            <h2>In-transit Ambulances</h2>
            <ul className="list group">
                <li className="list item">Lorem Ipsum</li>
                <li className="list item">Dolor Sit Amet</li>
                <li className="list item">Yarr! Ipsum</li>
                <li className="list item">Hipsum</li>
            </ul>
        </div> */}
      </div>
    )
  }
}

const mapStateToProp = state =>{

  return {
      ambulances:state.ambulance
  }
}
SidebarRight.propTypes = {
  ambulances:PropTypes.array,

}

export default connect(mapStateToProp) (SidebarRight)