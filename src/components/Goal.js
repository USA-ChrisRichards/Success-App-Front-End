import React, { Component } from "react";
import GoalEditor from "./GoalEditor";

//local state for goal and editClicked

class Goal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editClicked: false,
      currentGoal: {}
    };
  }
  renderGoalsAfterSubmit = () => {
    this.setState({
      editClicked: false
    });
  };

  handleCancel = () => {
    this.setState({
      editClicked: false
    });
  };
  handleEditClick = goal => {
    // show edit form with placeholder text of this.state.noteClicked
    this.setState({ currentGoal: goal, editClicked: !false });
    if (this.state.editClicked === false) {
      return false;
    } else {
      return true;
    }
  };

  showGoal = () => {
    return (
      <div key={this.props.goal.id}>
        <li key={this.props.goal.id}>
          <strong>{this.props.goal.title}</strong>

          <br></br>
          {this.props.goal.content}
        </li>
        <div className="content">
          <div className="meta">
            <span className="date">{this.props.goal.created_at}</span>
          </div>
          <button
            className="ui mini icon button"
            onClick={() => this.handleEditClick(this.props.goal)}
          >
            <i className="pencil icon"></i>
          </button>
          <button
            className="ui mini icon button red"
            onClick={() => this.props.handleGoalDelete(this.props.goal)}
          >
            <i className="trash icon"></i>
          </button>
        </div>
        <br></br>
      </div>
    );
  };

  render() {
    return this.state.editClicked === false ? (
      this.showGoal()
    ) : (
      <GoalEditor
        goal={this.props.goal}
        currentGoal={this.state.currentGoal}
        handleCancel={this.handleCancel}
        updateGoal={this.props.updateGoal}
        renderGoalsAfterSubmit={this.renderGoalsAfterSubmit}
        displayUpdatedGoals={this.props.displayUpdatedGoals}
      />
    );
  }
}

export default Goal;
