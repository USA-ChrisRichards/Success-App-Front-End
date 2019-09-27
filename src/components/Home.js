import React, { Component } from "react";
import "../App.css";
import LoginForm from "./LoginForm";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderLogin = () => {
    if (this.props.showingLogin === true) {
      return <LoginForm />;
    }
  };
  render() {
    return (
      <div className="ui flex container home">
        {/* <h1>Home Page</h1>
        <h2>
          <em>Welcome to #Goals</em>
        </h2> */}
        <div className="ui container">
          {/* <LoginForm /> */}
          {this.renderLogin()}
          <div className="ui fluid image">
            <img
              src="https://picsum.photos/id/885/1200/600"
              alt="plane"
              className="home image"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
