import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class SidebarLeft extends Component {
  constructor(props){
    super(props)
    this.state = {
      requests:[]
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({requests:nextProps.requ.requestStatus})
    console.log("Home received props",nextProps.requ);
    
  }

  render() {
    const myName = []
    for(let item of this.state.requests){
      myName.push(
        <span className="list item">{item.number} : {item.location} : {item.description} <br/> </span> 
      )
    }
    return (
      <div>
        <div className="well">
            <h2>Requests</h2>
            <ul className="list group">
                {myName}
            </ul>
        </div>
        {/* <div className="well">
            <h2>Active Requests</h2>
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
      requ:state.requ
  }
}
SidebarLeft.propTypes = {
  requ:PropTypes.array,

}

export default connect(mapStateToProp) (SidebarLeft)
