import React, { Component } from "react";
import Board from "./Board";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      logged_in_user: ""
    };
  }

  fetchUser = () => {
    fetch(`http://localhost:3000/api/v1/users`)
      // will want to bring the id of the user that is logged in
      .then(res => res.json())
      .then(users =>
        this.setState({
          users: users
        })
      );
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <h1>Main Container</h1>
        <Board users={this.state.users} />
      </div>
    );
  }
}

export default MainContainer;
