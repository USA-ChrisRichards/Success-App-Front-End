import React, { Component } from "react";
import SignUpForm from "./SignUpForm";

//login previously created user

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpVisible: false,
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userLoginFetch(this.state);
    console.log("submit");
  };

  hideSignUp = () => {
    this.setState({
      signUpVisible: false
    });
  };
  cancelSignUp = () => {
    return (
      <div className=" ui button tiny" onClick={this.hideSignUp}>
        Back
      </div>
    );
  };

  changeState = () => {
    this.setState({
      signUpVisible: !this.state.signUpVisible
    });
  };

  showSignUp = () => {
    if (this.state.signUpVisible === true) {
      return (
        <SignUpForm
          handleCancel={this.handleCancel}
          cancelSignUp={this.cancelSignUp}
          handleSignUpSubmit={this.props.handleSignUpSubmit}
          userPostFetch={this.props.userPostFetch}
        />
      );
    } else {
      return (
        <button className="ui big button" onClick={this.changeState}>
          <i className="signup icon"></i>
          Sign Up
        </button>
      );
    }
  };

  // handleCancel = event => {
  //   this.setState({
  //     signUpVisible: false
  //   });
  //   event.preventDefault();
  // };

  render() {
    return (
      <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <div className="ui form" onSubmit={this.handleSubmit}>
              <div className="field">
                <label>Email</label>
                <div className="ui left icon input">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  ></input>
                  <i className="user icon"></i>
                </div>
              </div>

              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  ></input>
                  <i className="lock icon"></i>
                </div>
              </div>
              <div
                className="ui blue submit button"
                onClick={this.handleSubmit}
              >
                Login
              </div>
            </div>
          </div>
          {/* divider */}
          <div className="middle aligned column">{this.showSignUp()}</div>
        </div>
        <div className="ui vertical divider">Or</div>
      </div>
    );
  }
}

export default LoginForm;

/* <form className="ui form">
        <h2>Login</h2>
        <div className="field">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email"></input>
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password"></input>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  } */
