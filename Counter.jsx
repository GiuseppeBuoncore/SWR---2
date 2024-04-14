import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";
import Button from "react-bootstrap/Button";

function Counter({ initialValue = 0 }) {
  const [count, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(count);
  });

  function handleButtonIncrement() {
    setCounter((c) => c + 1);
  }

  function handleButtonDecrement() {
    setCounter((c) => c - 1);
  }

  function handleButtonReset() {
    setCounter(initialValue);
  }

  return (
    <>
      <CounterDisplay count={count} />
      <Button variant="primary" onClick={handleButtonIncrement}>
        Increment
      </Button>
      {""}
      <Button onClick={handleButtonDecrement}>Decrement</Button>
      <Button onClick={handleButtonReset}>Reset</Button>
    </>
  );
}

export default Counter;
