import React, { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  function getData(val) {
    setData(val.target.value);
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <h1>{data}</h1>
      <input type="text" onChange={getData} />
    </div>
  );
}

export default App;
