import React, { Component } from "react";
import Man from "../functional component/man";

class Person extends Component {
  render() {
    return (
      <div>
        <div>Name: Anish Singh</div>
        <div>Age: 20 Years</div>
        <Man />
      </div>
    );
  }
}

export default Person;
