import React, { Component } from "react";
import Sidebar from "./Sidebar";
import BoardList from "./BoardList";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      images: [],
      goals: []
    };
  }

  //*********************************************************** */
  //*Fetching:

  fetchGoals = () => {
    fetch(`http://localhost:3000/api/v1/goals`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${this.props.loggedInUser.jwt}`
      }
      // body: JSON.stringify({ user })
    })
      .then(res => res.json())
      .then(goalData =>
        this.setState({
          goals: goalData
        })
      );
  };

  fetchImages = board_id => {
    //fetch all of a users images then on image collage, filter like in goalslist
    fetch(`http://localhost:3000/api/v1/images`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${this.props.loggedInUser.jwt}`
      }
      // body: JSON.stringify({ user })
    })
      .then(res => res.json())
      .then(imageData =>
        this.setState({
          images: imageData
        })
      );
  };

  fetchBoards = () => {
    fetch(
      `http://localhost:3000/api/v1/users/${this.props.loggedInUser.user.id}/boards`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${this.props.loggedInUser.jwt}`
        }
        // body: JSON.stringify({ user })
      }
    )
      .then(res => res.json())
      .then(boardsData =>
        this.setState({
          boards: boardsData
        })
      );
  };

  componentDidMount() {
    this.fetchBoards();
    this.fetchGoals();
    this.fetchImages();
  }

  //* CREATE ******************************************************
  createGoal = board_id => {
    let newGoal = {
      board_id: board_id,
      title: "Enter Goal Title Here",
      content: "Enter Goal details here...",
      complete: false
    };
    fetch(`http://localhost:3000/api/v1/goals`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.props.loggedInUser.jwt}`
      },
      body: JSON.stringify(newGoal)
    })
      .then(res => res.json())
      .then(newGoal =>
        this.setState(prevState => {
          return { goals: [...prevState.goals, newGoal] };
        })
      );
  };

  createBoard = user_id => {
    let newBoard = {
      user_id: user_id,
      title: "Enter Category Here"
    };
    fetch(`http://localhost:3000/api/v1/users/${user_id}/boards`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.props.loggedInUser.jwt}`
      },
      body: JSON.stringify(newBoard)
    })
      .then(res => res.json())
      .then(newBoard =>
        this.setState(prevState => {
          return { boards: [...prevState.boards, newBoard] };
        })
      );
  };

  //** DELETE ********************************************* */

  filterDeletedGoal(deletedGoal) {
    this.setState({
      goals: this.state.goals.filter(goal => goal.id !== deletedGoal.id)
    });
  }

  handleGoalDelete = deletedGoal => {
    let deleteConfirmation = window.confirm(
      `Are you sure you want to DELETE? - "${deletedGoal.title}"`
    );
    if (deleteConfirmation === true) {
      fetch(`http://localhost:3000/api/v1/goals/${deletedGoal.id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.props.loggedInUser.jwt}`
        },
        body: JSON.stringify(deletedGoal)
      })
        .then(res => res.json())
        .then(json => this.filterDeletedGoal(deletedGoal));
      alert("Your goal has been deleted!");
    }
  };

  filterDeletedBoard(deletedBoard) {
    this.setState({
      boards: this.state.boards.filter(board => board.id !== deletedBoard.id)
    });
  }

  handleBoardDelete = deletedBoard => {
    let deleteConfirmation = window.confirm(
      `Are you sure you want to DELETE? - "${deletedBoard.title}"`
    );
    if (deleteConfirmation === true) {
      fetch(`http://localhost:3000/api/v1/boards/${deletedBoard.id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.props.loggedInUser.jwt}`
        },
        body: JSON.stringify(deletedBoard)
      })
        .then(res => res.json())
        .then(json => this.filterDeletedBoard(deletedBoard));
      alert("Your board has been deleted!");
    }
  };

  // ** UPDATE ************************************************** //
  displayUpdatedGoals = updatedGoal => {
    //map through, if goal id matched updatedgoal id, return updated note
    const updatedGoals = this.state.goals.map(goal => {
      if (goal.id === updatedGoal.id) {
        return updatedGoal;
      } else {
        return goal;
      }
    });
    this.setState({
      goals: updatedGoals
    });
  };
  updateGoal = (changes, id) => {
    fetch(`http://localhost:3000/api/v1/goals/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.props.loggedInUser.jwt}`
      },
      method: "PATCH",
      body: JSON.stringify(changes)
    })
      .then(res => res.json())
      .then(goal => this.displayUpdatedGoals(goal))
      .catch(error => console.log(error));
  };

  displayUpdatedBoards = updatedBoard => {
    const updatedBoards = this.state.boards.map(board => {
      if (board.id === updatedBoard.id) {
        return updatedBoard;
      } else {
        return board;
      }
    });
    this.setState({
      boards: updatedBoards
    });
  };
  updateBoard = (changes, id) => {
    fetch(`http://localhost:3000/api/v1/boards/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.props.loggedInUser.jwt}`
      },
      method: "PATCH",
      body: JSON.stringify(changes)
    })
      .then(res => res.json())
      .then(board => this.displayUpdatedBoards(board))
      .catch(error => console.log(error));
  };

  // ****************************************************************** //

  render() {
    console.log(this.state);
    return (
      <div className="ui container">
        <div className="">
          <div className="">
            <Sidebar
              // user={this.state.loggedInUser}
              createBoard={this.createBoard}
              loggedInUser={this.props.loggedInUser}
            />
          </div>
          <div>
            <BoardList
              className=""
              boards={this.state.boards}
              images={this.state.images}
              goals={this.state.goals}
              loggedInUser={this.props.loggedInUser}
              createGoal={this.createGoal}
              handleGoalDelete={this.handleGoalDelete}
              handleBoardDelete={this.handleBoardDelete}
              handleEditClick={this.handleEditClick}
              editClicked={this.state.editClicked}
              handleCancel={this.props.handleCancel}
              updateGoal={this.updateGoal}
              displayUpdatedGoals={this.displayUpdatedGoals}
              updateBoard={this.updateBoard}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
