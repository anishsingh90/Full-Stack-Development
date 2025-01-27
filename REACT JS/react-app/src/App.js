import React, { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
  }

  return (
    <div className="App">
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print Data</button>
    </div>
  );
}

export default App;
