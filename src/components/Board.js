import React, { Component } from "react";
import "../App.css";
import GoalsList from "./GoalsList";
import ImageCollage from "./ImageCollage";
import BoardEditor from "./BoardEditor";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesVisible: false,
      showingBoardEditor: false
    };
  }

  renderBoardsAfterSubmit = () => {
    this.setState({
      showingBoardEditor: false
    });
  };
  changeBoardView = prevState => {
    this.setState(prevState => {
      return { imagesVisible: !this.state.imagesVisible };
    });
  };

  //function to conditionally render <h2> {board.title} or BoardEditor
  viewBoardEditor = () => {
    this.setState(prevState => {
      return { showingBoardEditor: !this.state.showingBoardEditor };
    });
  };
  renderTitleOrEditor = () => {
    if (this.state.showingBoardEditor === true) {
      return (
        <BoardEditor
          board={this.props.board}
          updateBoard={this.props.updateBoard}
          renderBoardsAfterSubmit={this.renderBoardsAfterSubmit}
        />
      );
    } else {
      return (
        <h1>
          My <u>{this.props.board.title}</u> Goals and Habits:
        </h1>
      );
    }
  };

  render() {
    const board = this.props.board;
    return (
      <div className="ui card" key={board.id}>
        {this.renderTitleOrEditor(board)}
        <div>
          <button
            className="ui small icon button"
            onClick={this.viewBoardEditor}
          >
            <i className="pencil icon"></i>
          </button>
          <button
            className="ui small icon button"
            onClick={() => this.props.handleBoardDelete(board)}
          >
            <i className="trash icon"></i>
          </button>
        </div>
        <div className="card-content">
          {this.state.imagesVisible ? (
            <ImageCollage images={this.props.images} board={this.props.board} />
          ) : (
            <GoalsList
              handleGoalDelete={this.props.handleGoalDelete}
              goals={this.props.goals}
              createGoal={this.props.createGoal}
              board={this.props.board}
              handleEditClick={this.props.handleEditClick}
              editClicked={this.props.editClicked}
              handleCancel={this.props.handleCancel}
              updateGoal={this.props.updateGoal}
              displayUpdatedGoals={this.props.displayUpdatedGoals}
            />
          )}
        </div>

        <div className="content">
          <div className="meta">
            {/* <span className="date">{board.created_at}</span> */}
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button" onClick={this.changeBoardView}>
            View Images
          </button>
        </div>
      </div>
    );
  }
}

export default Board;
