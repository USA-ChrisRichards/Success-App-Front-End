import React, { Component } from "react";

class GoalEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.currentGoal.title,
      content: props.currentGoal.content
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    //use [] around key because we want the value of event.target.name, not just 'event.target.name'
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.updateGoal(this.state, this.props.currentGoal.id);
    this.props.renderGoalsAfterSubmit();
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="title"
          defaultValue={this.props.goal.title}
        />
        <textarea
          onChange={this.handleChange}
          name="content"
          defaultValue={this.props.goal.content}
        />
        <div className="button-row">
          <input className="ui button mini" type="submit" value="Save" />
          <button
            className="ui button mini"
            onClick={this.props.handleCancel}
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default GoalEditor;
