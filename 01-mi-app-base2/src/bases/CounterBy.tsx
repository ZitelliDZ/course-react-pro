import React, { useState } from "react";

interface Props {
  initialValue?: number;
}

interface CountStateI {
  counter: number;
  clicks: number;
}

const CounterBy = ({ initialValue = 10 }: Props) => {
  
  const [countState, setCount] = useState<CountStateI>({
    counter: initialValue,
    clicks: 0,
  });

  const {clicks,counter} = countState

  const handleClick = (number: number) => {
    setCount(({clicks,counter}) => ({
      counter: counter + number,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h2>Counter: {counter}</h2>
      <h2>Transacciones: {clicks}</h2>

      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(2)}>+2</button>
      <button onClick={() => handleClick(5)}>+5</button>
      <button onClick={() => handleClick(-5)}>-5</button>
      <button onClick={() => handleClick(-2)}>-2</button>
      <button onClick={() => handleClick(-1)}>-1</button>
    </>
  );
};

export default CounterBy;
