import React, { Component } from "react";

class Person2 extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: "Anish Singh",
      age: 20,
    };
  }

  nameChangeHandler() {
    this.setState({ name: "Anish Patel" });
    this.setState({ age: 21 });
  }

  render() {
    return (
      <div>
        <h1>
          <i>
            Dear {this.state.name} is {this.state.age}, Years Welcome To WsCube
            Tech
          </i>
          <br />
          <button onClick={this.nameChangeHandler.bind(this)}>Click Me!</button>
        </h1>
      </div>
    );
  }
}

export default Person2;
