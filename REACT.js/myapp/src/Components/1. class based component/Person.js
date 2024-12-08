import React, { Component } from "react";

class Person extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>
          <i>Welcome To WsCube Tech</i>
        </h1>
        <h2>Testing</h2>
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { class: "App-header" },
    //   React.createElement(
    //     "h1",
    //     null,
    //     React.createElement("i", null, "Welcome To WsCube Tech")
    //   )
    // );
  }
}

export default Person;
