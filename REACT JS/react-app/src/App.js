import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "Anish",
    };
  }

  apple() {
    this.setState({ data: "Singh" });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World !</h1>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.apple()}>Update Data</button>
      </div>
    );
  }
}

export default App;
