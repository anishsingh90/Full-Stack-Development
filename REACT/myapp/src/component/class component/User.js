import React, { Component } from "react";

class User extends Component {
  constructor() {
    super();
    this.state = {
      data: 1,
    };
  }

  apple() {
    this.setState({ data: this.state.data + 1 });
  }

  render() {
    return (
      <>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.apple()}>Update Data</button>
      </>
    );
  }
}

export default User;
