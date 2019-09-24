import React, { Component } from "react";
import "../App.css";
import GoalsList from "./GoalsList";
import ImageCollage from "./ImageCollage";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesVisible: false
    };
  }

  changeBoardView = prevState => {
    this.setState(prevState => {
      return { imagesVisible: !this.state.imagesVisible };
    });
  };

  render() {
    // console.log(this.state);
    // console.log(this.props);
    const board = this.props.board;
    return (
      <div className="ui card">
        <h2>
          {board.title}
          <button
            className="ui small icon button"
            onClick={console.log("some func for edit Board Title")}
          >
            <i className="pencil icon"></i>
          </button>
          <button
            className="ui small icon button"
            onClick={console.log("some func for delete Board")}
          >
            <i className="trash icon"></i>
          </button>
        </h2>
        {this.state.imagesVisible ? (
          <ImageCollage images={this.props.images} />
        ) : (
          <GoalsList goals={this.props.goals} />
        )}

        <div className="content">
          <div className="meta">
            <span className="date">{board.created_at}</span>
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
