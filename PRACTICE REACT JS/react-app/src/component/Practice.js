import React from "react";

class Practice extends React.Component {
  render() {
    return (
      <div>
        <h1>Name = {this.props.name}</h1>
        <h1>Email = {this.props.email}</h1>
      </div>
    );
  }
}

export default Practice;
