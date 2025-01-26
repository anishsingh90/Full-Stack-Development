import { useState } from "react";

function App() {
  const [data, setData] = useState("Anish");

  function updateData() {
    setData("Singh");
  }
  return (
    <>
      <h1>{data}</h1>
      <button onClick={updateData}>Update-Data</button>
    </>
  );
}

export default App;
