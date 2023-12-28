import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";
import CounterHook from "./bases/CounterHook";
import CounterReducerComponent from "./bases/counter-reducer/CounterReducerComponent";


function App() {
  return (
    <>
     <h1>React</h1> 
     <hr />
     <Counter initialValue={100} />
     <Counter initialValue={10} />
     <hr />
     <CounterBy  />
     <hr />
     Effect
     <CounterEffect />
     <hr />
     <CounterEffect />
     <hr />
     <CounterHook />
     <hr />
     <h1>Counter Reducer Segmentado</h1>
     <CounterReducerComponent />
    </>
  );
}

export default App;
