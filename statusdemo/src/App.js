import logo from "./logo.svg";
import "./App.css";
import Container from "./components/Container";
import { useAppStore } from "./state/State";
import { useState } from "react";

function App() {
  const count = useAppStore((state) => state.count)
  const increase = useAppStore((state) => state.increase)
 
  return (
    <div className="App">
      <h1>Demo</h1>
      <p>{count}</p>

      <button onClick={() => increase()}> Increase</button>

      <Container />
    </div>
  );
}

export default App;
