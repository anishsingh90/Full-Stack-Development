import React from "react";

class User extends React.Component {
  render() {
    return (
      <div>
        <h1>User Component {this.props.name}</h1>
      </div>
    );
  }
}

export default User;
