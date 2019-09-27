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
      <div>
        <div className="ui menu inverted">
          <div className="item">
            <img src={photo} alt=""></img>
          </div>
          <h3 className="item">
            Name: {user.first_name + " " + user.last_name}
          </h3>
          <h3 className="item">Email: {user.email}</h3>
          <h3 className="item">Location: {user.location}</h3>

          <button className="ui right floated button inverted">Logout</button>

          <div className="">
            <button
              className="fluid ui button"
              onClick={() => this.props.createBoard(this.props.user.id)}
            >
              Create a New Board
            </button>
          </div>
          <div></div>
        </div>
        <div className="pusher"></div>
      </div>
    );
  }
}

export default Sidebar;
