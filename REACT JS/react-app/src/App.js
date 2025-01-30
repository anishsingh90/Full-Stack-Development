import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount(preProps, preState, snapshot) {
    console.warn("componentDidMount", preState);
  }
  render() {
    console.warn("render");

    return (
      <div className="App">
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update Name
        </button>
      </div>
    );
  }
}

export default App;
