import React, { useState } from "react";

function Practice() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    // Conditional rendering in React.js
    <div>{loggedIn ? <h1>Welcome Anish</h1> : <h1>Welcome Guest</h1>}</div>
  );
}

export default Practice;
