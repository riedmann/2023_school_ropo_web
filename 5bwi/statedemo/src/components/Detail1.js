import React, { useContext } from "react";
import { NumberAppContext } from "../App";

export default function Detail1(props) {
  const { appState, setAppState } = useContext(NumberAppContext);

  return (
    <div>
      <h1>Detail 1</h1>

      <h2>{props.number}</h2>
      <p>
        Context:{appState.number} {appState.name}
      </p>
    </div>
  );
}
