import React, { Component } from "react";

class LoginForm extends Component {
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
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
