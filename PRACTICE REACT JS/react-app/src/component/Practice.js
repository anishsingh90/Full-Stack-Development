import React from "react";

class Practice extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.email}</h1>
      </div>
    );
  }
}

export default Practice;
