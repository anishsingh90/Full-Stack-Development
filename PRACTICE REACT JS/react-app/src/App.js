import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Anish Patel",
    };
  }

  apple() {
    this.setState({ name: "Anish Singh" });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.apple()}>Update Name</button>
      </div>
    );
  }
}

export default App;
