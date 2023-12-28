import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";

const MAX_COUNT = 15

interface Props {
    initialValue?: number
}

const CounterEffect = ({initialValue = 5}:Props) => {
    
    const [count, setCount] = React.useState(initialValue)
    const countElement = useRef<HTMLHeadingElement>(null)
    

    const handleClick = (number:number) => {
      
        setCount(prev => Math.min(prev + number , MAX_COUNT))
      
        
    }

    useEffect(() => {
      
      if (count < 10) return;

      const timeLine = gsap.timeline()

      timeLine.to(countElement.current,{y:-20,duration:0.2,ease:'ease.out'})
              .to(countElement.current,{y:0,duration:1,ease:'bounce.out'})

    
      return () => {
        
      }
    }, [count])
    
    
  return (
    <>
     <h2>Counter: </h2>
     <h3 ref={countElement} id='count'>{count}</h3> 
     <button onClick={() => handleClick(1)}>+1</button>
     <button onClick={() => handleClick(2)}>+2</button>
     <button onClick={() => handleClick(3)}>+3</button>
     <button onClick={() => handleClick(-3)}>-3</button>
     <button onClick={() => handleClick(-2)}>-2</button>
     <button onClick={() => handleClick(-1)}>-1</button>
    </>
  )
}

export default CounterEffect
