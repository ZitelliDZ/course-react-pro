import React, { useEffect, useRef, useState } from 'react'

interface Props {
    miliSeg: number
}

const Timer = ({miliSeg}:Props) => {

    const [segundos, setSegundos] = useState(0)

    const timer = useRef<NodeJS.Timer>()

    useEffect(() => {
      
        timer.current && clearInterval(timer.current)
        
        timer.current = setInterval(() => {
            setSegundos(s => s + 1 )
        }, miliSeg)
    
      
        return () => {
            clearInterval(timer.current)
        }
    }, [miliSeg])
    
  return (
    <div>
      <h3>Timer: {segundos}</h3>
    </div>
  )
}

export default Timer
