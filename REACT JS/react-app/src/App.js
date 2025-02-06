import React from "react";

function App() {
  const students = ["Anish", "Sidhu", "Sam", "Peter"];

  return (
    <div className="App">
      <h1>Handle Array with List</h1>
      {students.map((data) => (
        <h1>Name is : {data}</h1>
      ))}
    </div>
  );
}

export default App;
