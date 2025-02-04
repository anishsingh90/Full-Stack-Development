import Practice from "./component/Practice";

function App() {
  return (
    <div className="App">
      <Practice
        name="Anish"
        email="anishraaz90@gmail.com"
        other={{ address: "Delhi", mobile: "8368513561" }}
      />
    </div>
  );
}

export default App;
