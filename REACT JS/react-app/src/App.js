import React, { useState } from "react";

function App() {
  const [data, setData] = useState("Anish");
  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  );
}

export default App;
