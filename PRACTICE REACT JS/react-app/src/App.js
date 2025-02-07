import React, { useState } from "react";
import Practice from "./component/Practice";

function App() {
  const [name, setName] = useState("Anish");
  return (
    <div className="App">
      <Practice name={name} />
      <button
        onClick={() => {
          setName("Singh");
        }}
      >
        Update Name
      </button>
    </div>
  );
}

export default App;
