import React, { Component } from "react";
import "../App.css";

class Board extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    const user = this.props.user;
    return (
      <div className="ui card">
        <h2>Board Title</h2>
        <div className="image">
          <img src={this.props.profile_photo} alt="..." className="board"></img>
        </div>
        <div className="content">
          <a className="header">{this.props.first_name}</a>
          <div className="meta">
            <span className="date">Published 4/23/2019</span>
          </div>
        </div>
        <div className="extra content"></div>
      </div>
    );
  }
}

export default Board;
