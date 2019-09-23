import React, { Component } from "react";
import "../App.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="ui menu">
        <div className="header item" href="...">
          GoalsApp
        </div>
        <a className="item" href="...">
          About Us
        </a>
        <a className="item" href="...">
          Help
        </a>
        <a className="item" href="...">
          Resources
        </a>
      </div>
    );
  }
}

export default Header;
