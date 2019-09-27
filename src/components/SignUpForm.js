import React, { Component } from "react";

//create user and log them in

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>First Name</label>
          <input type="text" name="first-name" placeholder="First Name"></input>
        </div>
        <div className="field">
          <label>Last Name</label>
          <input type="text" name="last-name" placeholder="Last Name"></input>
        </div>
        {/* <div className="field"> */}
        <div className="field">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email"></input>
        </div>
        {/* </div> */}
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="password"></input>
        </div>
        <button className="ui primary tiny button" type="submit">
          Submit
        </button>
        {this.props.cancelSignUp()}

        {/* <button
          className="ui button"
          onClick={event => this.handleCancel(event)}
        >
          Cancel
        </button> */}
      </form>
    );
  }
}

export default SignUpForm;
