function App() {
  function apple() {
    alert("Function Called");
  }

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => alert("Hello")}>CLick Me!</button>
    </>
  );
}

export default App;
