import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      setNumber(0);
      alert("Sorry, Zero Limit Reached");
    }
  };

  return (
    <>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        INC/DCR
      </h2>
      <div className="main_div">
        <div className="center_div">
          <h1>{number}</h1>
          <div className="btn_div">
            <button onClick={increment}>Increment</button>

            <button onClick={decrement}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
