import logo from './logo.svg';
import './App.css';
import ProgressBar from "./ProgressBar";
import React, { useState } from "react";
function App() {
  const [val, setVal] = useState(0);
  const setValuer = (e) => setVal(Number(e.target.value));
  return (
    <div className="App">
      <>
        <div className="App">
          <h1>Progress bar</h1>
          <ProgressBar width={val} />
          <form>
            <label for="html">Input Percentage:</label>
            <input type="number" onChange={setValuer} />
          </form>
        </div>
      </>
    </div>
  );
}

export default App;
