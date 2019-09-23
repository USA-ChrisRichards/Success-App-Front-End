import React, { Component } from "react";
import Board from "./Board";

class BoardList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default BoardList;
