import React, { Component } from "react";
import Goal from "./Goal";

class GoalsList extends Component {
  filterGoals = () => {
    return this.props.goals.filter(goal => {
      return goal.board_id === this.props.board.id;
    });
  };

  renderGoals = () => {
    return this.filterGoals().map(goal => {
      return (
        <Goal
          key={goal.id}
          goal={goal}
          board={this.props.board}
          handleEditClick={this.props.handleEditClick}
          handleGoalDelete={this.props.handleGoalDelete}
          editClicked={this.props.editClicked}
          handleCancel={this.props.handleCancel}
          updateGoal={this.props.updateGoal}
          displayUpdatedGoals={this.props.displayUpdatedGoals}
        />
      );
    });
  };

  render() {
    return (
      <div className="">
        <h2>
          <button
            className="ui button tiny"
            onClick={() => this.props.createGoal(this.props.board.id)}
          >
            Create Goal
          </button>
        </h2>
        <em>
          <h3>Habits to Get YOU There:</h3>
        </em>
        <ul>{this.renderGoals()}</ul>
      </div>
    );
  }
}

export default GoalsList;
