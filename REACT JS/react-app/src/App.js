import React from "react";
import { Table } from "react-bootstrap";

function App() {
  const users = [
    {
      name: "Anil",
      email: "anish90@gmail.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "11", city: "Delhi", country: "India" },
        { Hn: "12", city: "Nagpur", country: "India" },
        { Hn: "13", city: "Patna", country: "India" },
      ],
    },
    {
      name: "Sidhu",
      email: "sidhu87@gmail.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "11", city: "Delhi", country: "India" },
        { Hn: "12", city: "Nagpur", country: "India" },
        { Hn: "13", city: "Patna", country: "India" },
      ],
    },
    {
      name: "Sam",
      email: "sam54@gmail.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "11", city: "Delhi", country: "India" },
        { Hn: "12", city: "Nagpur", country: "India" },
        { Hn: "13", city: "Patna", country: "India" },
      ],
    },
    {
      name: "Peter",
      email: "peter54@gmail.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "11", city: "Delhi", country: "India" },
        { Hn: "12", city: "Nagpur", country: "India" },
        { Hn: "13", city: "Patna", country: "India" },
      ],
    },
  ];

  return (
    <div className="App">
      <h1>Handle Array with List</h1>
      <Table variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <ul>
                  {user.address.map((addr, i) => (
                    <li key={i}>
                      {addr.Hn}, {addr.city}, {addr.country}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
