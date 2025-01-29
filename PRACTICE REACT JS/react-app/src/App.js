import { useState } from "react";

function App() {
  const [count, setCount] = useState(2);

  function Table() {
    setCount(count + 2);
  }

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={Table}>Table</button>
    </div>
  );
}

export default App;
