import React from 'react'

interface Props {
    initialValue?: number
}

const Counter = ({initialValue = 10}:Props) => {
    const [count, setCount] = React.useState(initialValue)
    

    const handleClick = (number:number) => {
        setCount(prev => prev + number)
    }
    
  return (
    <>
     <h2>Counter: {count}</h2> 
     <button onClick={() => handleClick(1)}>+1</button>
     <button onClick={() => handleClick(2)}>+2</button>
     <button onClick={() => handleClick(3)}>+3</button>
     <button onClick={() => handleClick(-3)}>-3</button>
     <button onClick={() => handleClick(-2)}>-2</button>
     <button onClick={() => handleClick(-1)}>-1</button>
    </>
  )
}

export default Counter
