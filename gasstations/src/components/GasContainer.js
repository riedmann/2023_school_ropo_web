import React, { useEffect } from "react";
import styles from "./GasContainer.module.css";
import GasList from "./GasList";
import GasMap from "./GasMap";
import StationDetails from "./StationDetails";

const urlDie =
  "https://api.e-control.at/sprit/1.0/search/gas-stations/by-region?code=8&type=BL&fuelType=DIE&includeClosed=true";

const urlSup =
  "https://api.e-control.at/sprit/1.0/search/gas-stations/by-region?code=8&type=BL&fuelType=SUP&includeClosed=true";

const allRegions =
  "https://api.e-control.at/sprit/1.0/regions?includeCities=true";

export default function GasContainer() {
  const [stations, setStations] = React.useState([]);
  const [regions, setRegions] = React.useState([]);
  const [showDiesel, setShowDiesel] = React.useState(true);

  useEffect(() => {
    fetch(allRegions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRegions(data);
      });
  }, []);

  useEffect(() => {
    let url = urlDie;
    if (!showDiesel) {
      url = urlSup;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
     
        setStations(data);
       
      });
  }, [showDiesel]);

  return (
    <div className={styles.main}>
      <h1>Gasstations</h1>
      <p>the best prices in town</p>

      <div className={styles.container}>
        <button onClick={() => setShowDiesel(!showDiesel)}>
          {showDiesel ? "Show Gas" : "Show Diesel"}
        </button>
        <h2>Suche</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.box}>
          <GasMap stations={stations} />
        </div>
        <div className={styles.box}>
          <GasList stations={stations} />
        </div>
      </div>
    </div>
  );
}
