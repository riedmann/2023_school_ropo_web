import { createContext, useCallback, useMemo, useState } from "react";
import "./App.css";
import DetailWrapper from "./components/DetailWrapper";

export const NumberAppContext = createContext(null);

function App() {
  const [appState, setAppState] = useState({ name: "hans", number: 17 });

  return (
    <NumberAppContext.Provider value={{appState, setAppState}}>
      <div className="App">
        <DetailWrapper />
      </div>
    </NumberAppContext.Provider>
  );
}

export default App;
