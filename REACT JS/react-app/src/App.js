import React from "react";
import { Table } from "react-bootstrap";

function App() {
  const users = [
    { name: "anil", email: "anish90@gmail.com", contact: 111 },
    { name: "sidhu", email: "sidhu87@gmail.com", contact: 763 },
    { name: "sam", email: "sam54@gmail.com", contact: 873 },
    { name: "peter", email: "peter54@gmail.com", contact: 8473 },
  ];

  return (
    <div className="App">
      <h1>Handle Array with List</h1>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>

          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
