import React, { useState } from "react";
import Detail1 from "./Detail1";
import Detail2 from "./Detail2";

export default function DetailWrapper() {
  const [number, setNumber] = useState(0);


  const increaseNumber = ()=>{
    setNumber(number + 1);
  } 

  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Increase
      </button>
      <Detail1 number={number} />
      <Detail2 number={number} onIncrease={increaseNumber} />
    </div>
  );
}
