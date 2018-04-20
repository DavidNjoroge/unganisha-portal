import React, { Component } from 'react'

export default class SidebarRight extends Component {
  render() {
    return (
      <div>
         <div className="well">
            <h2>Available Ambulances</h2>
            <ul className="list group">
                <li className="list item">Lorem Ipsum</li>
                <li className="list item">Dolor Sit Amet</li>
                <li className="list item">Yarr! Ipsum</li>
                <li className="list item">Hipsum</li>
            </ul>
        </div>
        <div className="well">
            <h2>In-transit Ambulances</h2>
            <ul className="list group">
                <li className="list item">Lorem Ipsum</li>
                <li className="list item">Dolor Sit Amet</li>
                <li className="list item">Yarr! Ipsum</li>
                <li className="list item">Hipsum</li>
            </ul>
        </div>
      </div>
    )
  }
}
