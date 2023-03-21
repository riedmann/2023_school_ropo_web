import React, { useContext } from "react";
import { NumberAppContext } from "../App";

export default function Detail2(props) {
    
  const { appState, setAppState } = useContext(NumberAppContext);
  return (
    <div>
      <button
        onClick={() => {
          props.onIncrease();
          let obj={...appState,number:appState.number + 1};
          setAppState(obj);
        }}
      >
        inc
      </button>
      <h1>Detail 2</h1>
      <h2>{props.number}</h2>
    </div>
  );
}
