import logo from "./logo.svg";
import "./App.css";
import Map from "./components/Map";
import {  useState } from "react";

import UseRef from "./components/useref";
import MainView from "./components/MainView";



function App() {
  const [isA, setisA] = useState(false);

  return (
    <div className="App">
      <h1>Tankstellen Karte</h1>
      <MainView/>

     
    </div>
  );
}

export default App;
