import React, { Fragment } from "react";
import Users from "./Component/User";
function App() {
  return (
    <div>
      <h1>React Fragment</h1>
      <table>
        <tbody>
          <tr>
            <Users />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
