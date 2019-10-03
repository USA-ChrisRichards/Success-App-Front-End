import React, { Component } from "react";
import MainContainer from "./MainContainer";
import Header from "./Header";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: false, showingLogin: false };
  }

  renderHomeOrMainContainer = () => {
    if (this.state.loggedInUser) {
      return <MainContainer loggedInUser={this.state.loggedInUser} />;
    } else {
      return (
        <Home
          showingLogin={this.state.showingLogin}
          testCreateUser={this.testCreateUser}
          handleSignUpSubmit={this.handleSignUpSubmit}
          userPostFetch={this.userPostFetch}
          loggedInUser={this.state.loggedInUser}
          userLoginFetch={this.userLoginFetch}
        />
      );
    }
  };

  // userPostFetch = user => {
  //   return fetch("http://localhost:3000/api/v1/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({ user })
  //   })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       if (data.message) {
  //         console.log("error");
  //       } else {
  //         localStorage.setItem("token", data.jwt);
  //         this.setState({
  //           loggedInUser: user
  //         });
  //       }
  //     });
  // };

  userLoginFetch = user => {
    return fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${user.jwt}`
      },
      body: JSON.stringify({ user })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          window.alert(data.message);
        } else {
          // localStorage.setItem("token", data.jwt);
          this.setState({
            loggedInUser: data
          });
        }
      });
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
