//import React, { useEffect, useRef } from "react";
import { useCounter } from "./hooks/useCounter";

//const MAX_COUNT = 100;

interface Props {
  initialValue?: number;
}
const CounterHook = ({ initialValue = 5 }: Props) => {
  
  const {count,elementToAnimated,handleClick} = useCounter({ initialValue,min:2 });

  const {elementToAnimated:elementToAnimated2,handleClick:handle2} = useCounter({ initialValue,min:2 });

  return (
    <>
      <h2>Counter: </h2>
      <h3 ref={elementToAnimated} id="count">
        {count}
      </h3>
      <button ref={elementToAnimated2} onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handle2(2)}>+2</button>
      <button onClick={() => handleClick(3)}>+3</button>
      <button onClick={() => handleClick(-3)}>-3</button>
      <button onClick={() => handleClick(-2)}>-2</button>
      <button onClick={() => handleClick(-1)}>-1</button>
    </>
  );
};

export default CounterHook;
