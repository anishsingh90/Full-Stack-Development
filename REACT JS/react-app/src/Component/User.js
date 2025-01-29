import React from "react";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "anishraaz90@gmail.com",
    };
  }
  render() {
    return (
      <div>
        <h1>User Component</h1>
        <p>Email: {this.state.email}</p>
        <button
          onClick={() => this.setState({ email: "raazanish01@gmail.com" })}
        >
          Update Email
        </button>
      </div>
    );
  }
}

export default User;
