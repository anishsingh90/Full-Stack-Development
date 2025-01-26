import Student from "./component/functional component/student";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Anish",
    };
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>Props !</h1>
          <Student name={this.state.name} email="anishraaz90@gmail.com" />

          <button onClick={() => this.setState({ name: "Singh" })}>
            Update Name
          </button>
        </div>
      </>
    );
  }
}

export default App;
