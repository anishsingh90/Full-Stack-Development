function App() {
  function Apple() {
    alert("Event is Executed!");
  }
  return (
    <>
      <div>
        <h1>Event in React JS</h1>
      </div>
      <button onClick={Apple}>Click Me!</button>
    </>
  );
}

export default App;
