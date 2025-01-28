import React from "react";
import User from "./Component/User";

function App() {
  const [name, setName] = React.useState("Anish");

  return (
    <div className="App">
      <User name={name} />
      <button onClick={() => setName("Singh")}>Update Name</button>
    </div>
  );
}

export default App;
