import React , {useState} from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0);
  const plusCount = () =>{
    setCount((prevCount) => prevCount + 1);
  };
  const minusCount = () =>{
    setCount((prevCount) => prevCount - 1);
  };
  const resetCount = () =>{
    setCount(0);
  };
  return (
    <div>
        <h1>Counter App</h1>
        <div className="card">
          <h3>Count : {count}</h3>
          <div className="all-btns">
              <button id="plus" onClick={plusCount} disabled={count === 5 ? true : false}>+</button>
              <button id="minus" onClick={minusCount} disabled={count === -5 ? true : false}>-</button>
              <button onClick={resetCount}>0</button>
          </div>
        </div>
    </div>
  );
}

export default App;
