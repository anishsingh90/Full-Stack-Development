import React from "react";
import "./App.css";
import Users from "./Component/User";

function App() {
  const users = [
    {
      name: "Anil",
      email: "anish90@gmail.com",
      contact: 111,
    },
    {
      name: "Sidhu",
      email: "sidhu87@gmail.com",
      contact: 763,
    },
    {
      name: "Sam",
      email: "sam54@gmail.com",
      contact: 873,
    },
    {
      name: "Peter",
      email: "peter54@gmail.com",
      contact: 8473,
    },
  ];

  return (
    <div className="App">
      <h1>Handle Array with List</h1>

      {users.map((item, i) => (
        <Users data={item} />
      ))}
    </div>
  );
}

export default App;
