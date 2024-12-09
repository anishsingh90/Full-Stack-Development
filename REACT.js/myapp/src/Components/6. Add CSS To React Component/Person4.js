import React, { Component } from "react";
import "./Person4.css";

class Person4 extends Component {
  render() {
    //Apply Inline CSS
    const style = {
      color: "red",
    };

    return (
      <div className="App-header">
        <h1>
          <i>Welcome To WsCube Tech</i>
        </h1>
        <h2>Testing</h2>
        <p style={style}>What is Your Name?</p>
      </div>
    );
  }
}

export default Person4;
