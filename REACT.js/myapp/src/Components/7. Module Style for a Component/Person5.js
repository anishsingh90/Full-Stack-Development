import React, { Component } from "react";
import PersonStyle from "./Person5.module.css";

class Person5 extends Component {
  render() {
    return (
      <div className={PersonStyle.PersonBox}>
        <h1>
          <i className={PersonStyle.name}>Welcome To WsCube Tech</i>
        </h1>
        <h2>Testing</h2>
      </div>
    );
  }
}

export default Person5;
