import "./App.css";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function increment() {
    return setCounter((prev) => prev + 1);
  }
  function decrement() {
    if (counter <= 0) {
      alert("Нельзя меньше нуля");
      return;
    }
    return setCounter((prev) => prev - 1);
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
