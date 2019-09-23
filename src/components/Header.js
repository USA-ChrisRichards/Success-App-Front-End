import React, { Component } from "react";
import "../App.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="ui menu">
        <div className="header item" href="...">
          Our Company
        </div>
        <a className="item" href="...">
          About Us
        </a>
        <a className="item" href="...">
          Jobs
        </a>
        <a className="item" href="...">
          Locations
        </a>
      </div>
    );
  }
}

export default Header;
