import React, { useEffect, useRef, useState } from "react";
import Timer from "./Timer";

const TimerPadre = () => {
  const [miliSeg, setMiliSeg] = useState(1000);

  return (
    <div className="mt-5">
      <h3>Timer Padre</h3>
      <h5>Milisegundos {miliSeg}</h5>
      <button
        onClick={() => {
          setMiliSeg(1000);
        }}
      >
        1000
      </button>
      <button
        onClick={() => {
          setMiliSeg(300);
        }}
      >
        300
      </button>

      <Timer miliSeg={miliSeg} />
    </div>
  );
};

export default TimerPadre;
