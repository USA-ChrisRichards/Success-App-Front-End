import React, { Component } from "react";
import "../App.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const user = this.props.user;
    const photo = user.profile_photo;
    return (
      <div className="column">
        <div className="ui menu inverted vertical">
          <div className="item">
            <img src={photo} alt=""></img>
          </div>
          <h3 className="item">{user.first_name + " " + user.last_name}</h3>
          <h3 className="item">{user.email}</h3>
          <h3 className="item">{user.location}</h3>
          <button className="ui button">Create a New Board</button>
        </div>
        <div className="pusher"></div>
      </div>
    );
  }
}

export default Sidebar;
