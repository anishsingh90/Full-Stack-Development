import React from "react";

function User(props) {
  return (
    <div className="User">
      <h1>User Component</h1>
      <button onClick={() => props.data()}>Call Data Function</button>
    </div>
  );
}

export default User;
