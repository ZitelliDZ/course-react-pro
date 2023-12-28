import React, { useEffect, useLayoutEffect, useRef } from "react"
import { gsap } from "gsap";

const MAX_COUNT = 10

interface Props {
    initialValue?: number
    min?: number
}
export const useCounter = ({initialValue = 5,min = 10}:Props)=>{

    const [count, setCount] = React.useState(initialValue)
    const elementToAnimated = useRef<any>(null)
    
    const tl = useRef<gsap.core.Timeline>(gsap.timeline())
    

    const handleClick = (number:number) => {
      
        setCount(prev => Math.min(prev + number , MAX_COUNT))
      
        
    }


    useLayoutEffect(() => {
        
        if (!elementToAnimated.current) return;
        if (!tl.current) return;

        tl.current.to(elementToAnimated.current,{y:-20,duration:0.2,ease:'ease.out'})
        .to(elementToAnimated.current,{y:0,duration:1,ease:'bounce.out'})
        .pause()
    
    }, [])

    useEffect(() => {
      
      //if (count < MAX_COUNT) return;

      //const timeLine = gsap.timeline()

      //tl.current.to(elementToAnimated.current,{y:-20,duration:0.2,ease:'ease.out'})
             // .to(elementToAnimated.current,{y:0,duration:1,ease:'bounce.out'})

        tl.current.play(0)
      return () => {
        
      }
    }, [count])


    return {

        count,
        handleClick,
        elementToAnimated
    }
    
}