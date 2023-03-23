import React from "react";
import List from "./List";
import Map from "./Map";

export default function Wrapper() {
  const [number, setNumber] = React.useState(17);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1>Wrapper</h1>
      Number: {number}
      <button onClick={() => increaseNumber()}>+</button>
      <List number={number} />
      <Map number={number} inc={increaseNumber}/>
    </div>
  );
}
