import React, { Component } from "react";
import MainContainer from "./MainContainer";
import Header from "./Header";
import LoginForm from "./LoginForm";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui container">
        <Home />
        <LoginForm />

        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;
