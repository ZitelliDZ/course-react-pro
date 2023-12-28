import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./actions/counterReducer";
import { doIncreaseBy, doReset } from "./actions/actions";

const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 10,
  changes: 10,
};

const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleClick = (number: number) => {
    
    //setCount(prev => prev + number)
    /*dispatch({
          type:'increaseBy',
          payload:{value:number}
        })*/

    dispatch(doIncreaseBy(number));
  };
  const reset = () => {
    /*dispatch({
        type:'reset',
      })*/
    dispatch(doReset());
  };

  return (
    <>
      <h2>Counter: {state.counter}</h2>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(2)}>+2</button>
      <button onClick={() => handleClick(3)}>+3</button>
      <button onClick={() => handleClick(-3)}>-3</button>
      <button onClick={() => handleClick(-2)}>-2</button>
      <button onClick={() => handleClick(-1)}>-1</button>
      <button onClick={() => reset()}>reset</button>
    </>
  );
};

export default CounterReducerComponent;
