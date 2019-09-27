import React, { Component } from "react";

class BoardEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.board.title
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    //use [] around key because we want the value of event.target.name, not just 'event.target.name'
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.updateBoard(this.state, this.props.board.id);
    this.props.renderBoardsAfterSubmit();
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          defaultValue={this.props.board.title}
          onChange={this.handleChange}
        />
        <div className="button-row">
          <input
            className="ui primary button mini"
            type="submit"
            value="Save"
          />
          {/* <button
            className="ui button mini"
            onClick={this.props.handleCancel}
            type="button"
          >
            Cancel
          </button> */}
        </div>
      </form>
    );
  }
}

export default BoardEditor;
