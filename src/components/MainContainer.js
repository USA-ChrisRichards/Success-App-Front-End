import React, { Component } from "react";
import Sidebar from "./Sidebar";
import BoardList from "./BoardList";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      logged_in_user: "",
      boards: [],
      images: [],
      goals: []
    };
  }

  fetchGoals = board_id => {
    fetch(`http://localhost:3000/api/v1/boards/${1}/goals`)
      .then(res => res.json())
      .then(goalData =>
        this.setState({
          goals: goalData
        })
      );
  };

  fetchImages = board_id => {
    fetch(`http://localhost:3000/api/v1/boards/${1}/images`)
      .then(res => res.json())
      .then(imageData =>
        this.setState({
          images: imageData
        })
      );
  };

  fetchBoards = () => {
    // GET    /api/v1/users/:user_id/boards
    fetch(`http://localhost:3000/api/v1/users/${1}/boards`)
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
    this.fetchBoards();
    this.fetchGoals();
    this.fetchImages();
  }

  render() {
    return (
      <div className="ui container">
        <h1>Main Container</h1>
        <div className="">
          <div className="">
            <Sidebar user={this.state.logged_in_user} />
          </div>
          <div>
            <BoardList
              className=""
              boards={this.state.boards}
              images={this.state.images}
              goals={this.state.goals}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
