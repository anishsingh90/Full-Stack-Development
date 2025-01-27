//Props with Functional Component

import Student from "./Component/Student";

function App() {
  return (
    <div className="App">
      <Student
        name="Anish"
        email="anishraaz90@gmail.com"
        other={{ address: "Delhi", mobile: "8368513561" }}
      />
    </div>
  );
}

export default App;
