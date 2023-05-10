
import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import { useAppStore } from "./state/Store";


function App() {
  const counter = useAppStore((state=>state.counter));
 
  return (
    <div className="App">
      <Container/>
      <Container />

      <div >Count: {counter}
      </div>
    </div>
  );
}

export default App;
