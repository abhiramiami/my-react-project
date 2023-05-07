import React, { Component } from "react";
import "./Home.css";
import { Icon } from "@iconify/react";
export default class Home extends Component {
  render() {
    return (
      <div className="main3">
        <div className="align-center1">
          <div className="opt">
            ONLINE
            <br />
            EXAMINATION
          </div>
          <div className="iv1">
            <Icon className="icc" icon="simple-icons:e" />
          </div>
        </div>
      </div>
    );
  }
}
