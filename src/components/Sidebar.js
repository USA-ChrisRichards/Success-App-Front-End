import React, { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const user = this.props.user;
    const photo = user.profile_photo;
    return (
      <div>
        <div className="ui vertical menu">
          <div className="item">
            <img src={photo}></img>
          </div>
          <h3 className="item">{user.first_name + " " + user.last_name}</h3>
          <h3 className="item">{user.email}</h3>
          <h3 className="item">{user.location}</h3>
        </div>
        <div className="pusher"></div>
      </div>
    );
  }
}

export default Sidebar;
