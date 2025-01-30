import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Anish",
    };
  }
  componentDidMount() {
    console.warn("componentDidMount");
  }
  render() {
    console.warn("render");

    return (
      <div className="App">
        <h1>Component Did Mount {this.state.name}</h1>
        <button onClick={() => this.setState({ name: "Singh" })}>
          Update Name
        </button>
      </div>
    );
  }
}

export default App;
