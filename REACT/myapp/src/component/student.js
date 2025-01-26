import React from "react";

class Student extends React.Component {
  render() {
    return (
      <div>
        Student {this.props.name} {this.props.email}
      </div>
    );
  }
}

export default Student;
