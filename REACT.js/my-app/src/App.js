import "./App.css";
import Navbar from "./Components/6. props & types/Navbar";
import About from "./Components/7. UseState & state/About";
// import TextForm from './Components/7. UseState & state/TextForm'

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <Navbar />

      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyze"/> */}
        {/* <TextForm/> */}
        <About />
      </div>
    </>
  );
}

export default App;
