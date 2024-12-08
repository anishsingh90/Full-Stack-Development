import React, { Component } from "react";

class Person1 extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <h1>
          <i>
            Dear {this.props.name}, age is {this.props.age}, years Welcome To
            WsCube Tech
          </i>
        </h1>
      </div>
    );
  }
}

export default Person1;
