import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(1);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const subtractValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Hello, how are you? Can you count ten numbers?</h1>

      <h3>Start: {counter}</h3>

      <button onClick={addValue}>Increment by 1</button>

      <button onClick={subtractValue}>Decrement by 1</button>
    </>
  );
}

export default App;
