import React, { useState } from "react";

function Profile() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    // Conditional rendering in React Js
    <div>{loggedIn ? <h1>Welcome Anish</h1> : <h1>Welcome Guest</h1>}</div>
  );
}

export default Profile;
