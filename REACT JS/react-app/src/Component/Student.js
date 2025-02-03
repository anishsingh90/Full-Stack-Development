import React from "react";

class Student extends React.Component {
  componentWillUnmount() {
    console.log("Component will Unmount");
  }
  render() {
    return (
      <div className="App">
        <h1>Component Will Unmount</h1>
      </div>
    );
  }
}

export default Student;
