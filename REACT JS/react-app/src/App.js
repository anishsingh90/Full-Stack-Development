import React from "react";

class App extends React.Component() {
  constructor() {
    super();
    console.warn("constructor");
  }
  componentDidMount() {
    console.warn("componentDidMount");
  }
  render() {
    console.warn("render");

    return (
      <div className="App">
        <h1>Component Did Mount</h1>
      </div>
    );
  }
}

export default App;
