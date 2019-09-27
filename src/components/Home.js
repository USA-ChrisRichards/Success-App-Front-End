import React, { Component } from "react";
import "../App.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ui flex container">
        <h1>Home Page</h1>
        <h2>
          <em>Welcome to #Goals</em>
        </h2>
        <div className="ui image">
          <img
            src="https://picsum.photos/id/888/1200/600"
            alt="plane"
            className="home image"
          ></img>
        </div>
      </div>
    );
  }
}

export default Home;
