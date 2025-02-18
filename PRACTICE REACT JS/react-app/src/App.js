import React from "react";

function App() {
  const [status, setStatus] = React.useState(true);
  return (
    <div className="App">
      {status ? <h1>Hello World Anish !</h1> : null}
      <button onClick={() => setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default App;
