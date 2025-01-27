//Update Props with Class Component
import React from "react";

import Student from "./Component/Student";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Anish",
      email: "anishraaz90@gmail.com",
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Props !</h1>
        <Student name={this.state.name} email={this.state.email} />
        <button onClick={() => this.setState({ name: "Singh" })}>
          Update Name
        </button>
        <button onClick={() => this.setState({ email: "singh90@gmail.com" })}>
          Update Email
        </button>
      </div>
    );
  }
}

export default App;
