import React from "react";

function App() {
  // const students = ["Anish", "Sidhu", "Sam", "Peter"];

  const students = [
    {
      name: "anil",
      email: "anish90@gmail.com",
      contact: 111,
    },
    {
      name: "sidhu",
      email: "sidhu87@gmail.com",
      contact: 763,
    },
    {
      name: "sam",
      email: "sam54@gmail.com",
      contact: 873,
    },
    {
      name: "peter",
      email: "peter54@gmail.com",
      contact: 8473,
    },
  ];
  return (
    <div className="App">
      <h1>Handle Array with List</h1>
      <table>
        {students.map((data) => (
          <tr>
            <td>Name: {data.name}</td>
            <td>Email: {data.email}</td>
            <td>Contact: {data.contact}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
