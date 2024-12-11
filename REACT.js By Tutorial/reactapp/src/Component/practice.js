import React from "react";

const Greeting = ({ name }) => {
  return (
    <div>
      <h2>Welcome, {name ? name : "Guest"}!</h2>
    </div>
  );
};

export default Greeting;
