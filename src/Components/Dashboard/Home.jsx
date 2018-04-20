import React, { Component } from 'react'
import  SidebarLeft  from "../SidebarLeft/SidebarLeft";
import  SidebarRight  from "../SidebarRight/SidebarRight";
import  MainColumn  from "../MainColumn/MainColumn";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
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
        </div>
      </div>
    )
  }
}
