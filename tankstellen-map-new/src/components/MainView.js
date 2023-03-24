import React, { useEffect, useState } from "react";
import Map from "./Map";
import StationList from "./StationList";
import Switch from '@mui/material/Switch';

const urlDie =
  "https://api.e-control.at/sprit/1.0/search/gas-stations/by-region?code=8&type=BL&fuelType=DIE&includeClosed=true";
const urlSup =
  "https://api.e-control.at/sprit/1.0/search/gas-stations/by-region?code=8&type=BL&fuelType=SUP&includeClosed=true";
//  const urlDie = "https://api.e-control.at/sprit/1.0/search/gas-stations/by-region?code=803&type=PB&fuelType=DIE&includeClosed=true";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function MainView() {
  const [stationsDiesel, setStationsDiesel] = useState([]);
  const [stationsSuper, setStationsSuper] = useState([]);
  const [showDiesel, setShowDiesel] = useState(true);

  useEffect(() => {
    fetch(urlDie).then((res) =>
      res.json().then((data) => {
        setStationsDiesel(data);
      })
    );

    fetch(urlSup).then((res) =>
      res.json().then((data) => {
        setStationsSuper(data);
      })
    );
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setShowDiesel(!showDiesel)}>
          {showDiesel ? "Diesel" : "Super"}
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1" }}>
          <Map stations={showDiesel ? stationsDiesel : stationsSuper} />
        </div>
        <div style={{ flex: "1" }}>
          <StationList stations={showDiesel ? stationsDiesel : stationsSuper} />
        </div>
        <Switch {...label} defaultChecked onChange={()=>setShowDiesel(!showDiesel)} />
        
      </div>
    </>
  );
}
