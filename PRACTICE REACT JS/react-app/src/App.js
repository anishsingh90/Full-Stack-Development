import React from "react";
import "./component/style.css";
import style from "./component/custom.module.css";

function App() {
  return (
    <div className="App">
      <h1 className="primary">Style type 1 in React js</h1>

      {/* Inline CSS  */}
      <h1 style={{ color: "red", backgroundColor: "black" }}>
        Style type 2 in React js
      </h1>

      {/* Modular CSS  */}
      <h1 className={style.success}>Style type 3 in React js</h1>
    </div>
  );
}

export default App;
