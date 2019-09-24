import React from "react";
import Board from "./Board";

const BoardList = props => {
  const boardsList = props.boards.map(board => {
    return (
      <Board
        key={board.id}
        board={board}
        title={board.title}
        images={props.images}
        goals={props.goals}
        // handleNoteClick={props.handleNoteClick}
      />
    );
  });
  return <div className="ui three stackable cards">{boardsList}</div>;
};

export default BoardList;
