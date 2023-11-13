import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ali",
      Profession: "Student",
      show: false,
    };
  }
  ShowParagraph = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    let userName = this.state.name;
    return (
      <div>
        <p>Hello {userName} </p>
        {this.state.show === true ? (
          <p>TESTING SHOW True</p>
        ) : (
          <p>TESTING SHOW False</p>
        )}

        <button onClick={this.ShowParagraph}>TEST SHOW</button>
      </div>
    );
  }
}

export default Profile;
