import React, { useEffect } from "react";
import styles from "./GasContainer.module.css";
import GasList from "./GasList";
import GasMap from "./GasMap";
import StationDetails from "./StationDetails";

const urlDie =
  "https://api.e-control.at/sprit/1.0/search/gas-stations/by-region?code=8&type=BL&fuelType=DIE&includeClosed=true";

const urlSup =
  "https://api.e-control.at/sprit/1.0/search/gas-stations/by-region?code=8&type=BL&fuelType=SUP&includeClosed=true";

export default function GasContainer() {
  const [stations, setStations] = React.useState([]);
  const [station,  setStation] = React.useState(null);
  const [showDiesel, setShowDiesel] = React.useState(true);

  useEffect(() => {
    let url = urlDie;
    if (!showDiesel){
      url = urlSup;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStations(data);
        if (data.length > 0) {
          setStation(data[0]);
        }
      });
  }, [showDiesel]);

  
  

  return (
    <div>
      <h1>Gasstations</h1>
      <h1>hello</h1>
      <button onClick={() => setShowDiesel(!showDiesel)}>Change</button>
      <div className={styles.container}>
        <h2>Diesel/Benzin</h2>
        <h2>Suche</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.box}>
          <GasList stations={stations} />
        </div>
        <div className={styles.box}>
          <GasList stations={stations} />
        </div>
      </div>
      
    </div>
  );
}
