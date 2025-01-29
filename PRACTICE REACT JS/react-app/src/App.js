import { useState } from "react";

function App() {
  const [data, setData] = useState("Anish Singh");
  function Update() {
    setData("Singh Patel");
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={Update}>Change Name</button>
    </div>
  );
}

export default App;
