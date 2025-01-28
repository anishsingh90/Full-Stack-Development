import Members from "./Component/Members";
import User from "./Component/User";

function App() {
  function getData() {
    alert("Hello From App");
  }
  return (
    <div className="App">
      <User data={getData} />
      <Members data={getData} />
    </div>
  );
}

export default App;
