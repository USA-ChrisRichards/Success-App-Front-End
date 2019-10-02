import React from "react";
import Board from "./Board";

const BoardList = props => {
  const boardsList = props.boards.map(board => {
    return (
      <Board
        createGoal={props.createGoal}
        key={board.id}
        board={board}
        title={board.title}
        images={props.images}
        goals={props.goals}
        handleGoalDelete={props.handleGoalDelete}
        handleBoardDelete={props.handleBoardDelete}
        handleEditClick={props.handleEditClick}
        editClicked={props.editClicked}
        handleCancel={props.handleCancel}
        updateGoal={props.updateGoal}
        displayUpdatedGoals={props.displayUpdatedGoals}
        updateBoard={props.updateBoard}
      />
    );
  });
  return <div className="ui one stackable cards">{boardsList}</div>;
};

export default BoardList;
