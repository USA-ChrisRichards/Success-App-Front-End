import React, { Component } from "react";

//create user and log them in

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      profile_photo: "",
      location: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  handleSignUpSubmit = event => {
    event.preventDefault();
    this.props.userPostFetch(this.state);
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSignUpSubmit}>
        <h1>Sign Up For An Account</h1>

        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.handleChange}
          ></input>
        </div>
        {/* <div className="field"> */}
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="field">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={this.state.location}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="field">
          <label>Profile Photo</label>
          <input
            type="text"
            name="profile_photo"
            placeholder="Profile Photo Url:"
            value={this.state.profile_photo}
            onChange={this.handleChange}
          ></input>
        </div>
        {/* </div> */}
        <div
          className="field"
          value={this.state.password}
          onChange={this.handleChange}
        >
          <label>Password</label>
          <input type="password" name="password" placeholder="Password"></input>
        </div>
        <button className="ui primary tiny button" type="submit">
          Submit
        </button>
        {this.props.cancelSignUp()}
      </form>
    );
  }
}

export default SignUpForm;
