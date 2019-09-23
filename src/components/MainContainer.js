import React, { Component } from "react";
import Sidebar from "./Sidebar";
import BoardList from "./BoardList";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      logged_in_user: "",
      boards: []
    };
  }

  fetchBoards = () => {
    fetch(`http://localhost:3000/api/v1/boards`)
      // will want to bring the id of the user that is logged in
      .then(res => res.json())
      .then(boardsData =>
        this.setState({
          boards: boardsData
        })
      );
  };

  fetchUser = () => {
    fetch(`http://localhost:3000/api/v1/users/${1}`)
      // will want to bring the id of the user that is logged in
      .then(res => res.json())
      .then(user =>
        this.setState({
          logged_in_user: user
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
        <div className="ui grid">
          <div className="column">
            <Sidebar user={this.state.logged_in_user} />
          </div>
          <div className="column">
            <BoardList user={this.state.logged_in_user} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
