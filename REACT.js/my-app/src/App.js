import "./App.css";
import Navbar from "./Components/6. props & types/Navbar";
// import About from "./Components/7. UseState & state/About";
import TextForm from "./Components/7. UseState & state/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enable or not

  return (
    <>
      {/* Navbar.js access from Here  */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" />
      <Navbar /> */}
      <Navbar title="TextUtils" mode={mode} />

      {/* TextForm.js access from Here  */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />

        {/* About.js access from Here  */}
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
