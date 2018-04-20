import React, { Component } from 'react'

export default class SidebarLeft extends Component {
  render() {
    return (
      <div>
        <div className="well">
            <h2>Pending Requests</h2>
            <ul className="list group">
                <li className="list item">Lorem Ipsum</li>
                <li className="list item">Dolor Sit Amet</li>
                <li className="list item">Yarr! Ipsum</li>
                <li className="list item">Hipsum</li>
            </ul>
        </div>
        <div className="well">
            <h2>Active Requests</h2>
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
