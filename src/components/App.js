import React, { Component } from "react";
import MainContainer from "./MainContainer";
import Header from "./Header";
// import LoginForm from "./LoginForm";
// import SignUpForm from "./SignUpForm";
import Home from "./Home";
// import LoginForm from "./LoginForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: false, showingLogin: false };
  }

  renderHomeOrMainContainer = () => {
    if (this.state.loggedInUser) {
      return <MainContainer />;
    } else {
      return <Home showingLogin={this.state.showingLogin} />;
    }
  };

  toggleLoginOnClick = event => {
    event.preventDefault();
    this.setState({ showingLogin: !this.state.showingLogin });
  };

  render() {
    return (
      <div className="ui container">
        <Header
          toggleLoginOnClick={this.toggleLoginOnClick}
          showingLogin={this.state.showingLogin}
        />
        {this.renderHomeOrMainContainer()}
        {/* <Home />
        <MainContainer /> */}
      </div>
    );
  }
}

export default App;
