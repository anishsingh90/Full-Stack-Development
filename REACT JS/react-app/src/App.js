//Change Props with Functional Component
import React, { useState } from "react";

import Student from "./Component/Student";

function App() {
  const [name, setName] = useState("Anish");
  return (
    <div className="App">
      <Student name={name} />
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
