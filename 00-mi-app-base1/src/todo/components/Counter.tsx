import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const increment = (number:number):void => {
        setCounter(counter + number)
    }

  return (
    <div className='mt-5'>
      <h3>Counter: useState</h3>
      <p>{counter}</p>
      <button onClick={() => increment(1)}>+1</button>
      <button onClick={() => increment(2)}>+2</button>
      <button onClick={() => increment(3)}>+3</button>
      <button onClick={() => increment(-3)}>-3</button>
      <button onClick={() => increment(-2)}>-2</button>
      <button onClick={() => increment(-1)}>-1</button>
      <hr />
      
    </div>
  )
}

export default Counter
