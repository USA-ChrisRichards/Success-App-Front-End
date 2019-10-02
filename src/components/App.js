import React, { Component } from "react";
import MainContainer from "./MainContainer";
import Header from "./Header";
import Home from "./Home";

// fetch('http://localhost:3000/api/v1/profile', {
//   method: 'GET',
//   headers: {
// Put this Auth header in all fetch requests
//!     Authorization: `Bearer <token>`
//   }
// })

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
          // Here you should have logic to handle invalid login credentials.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error
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
