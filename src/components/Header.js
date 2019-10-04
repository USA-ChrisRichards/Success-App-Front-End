import React, { Component } from "react";
import "../App.css";

class Header extends Component {
  state = {};

  render() {
    return (
      <div className="ui menu">
        <button className="header item" href="...">
          Success App
        </button>
        <button
          className="item"
          onClick={event => this.props.toggleLoginOnClick(event)}
        >
          Login / Sign Up
        </button>
        <a className="item" href="...">
          About
        </a>
        <a className="item" href="...">
          Resources
        </a>
      </div>
    );
  }
}

export default Header;
