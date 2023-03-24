import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

export default function Map(props) {

 
  
    const getPrices = (prices) => {
    return prices.map((price) => {
      return (
        <p>
          {price.label}: {price.amount}
        </p>
      );
    });
  };

  const getAllMarkers = () => {
    let result = props.stations.map((station) => {
      let data = [station.location.latitude, station.location.longitude];
      return (
        <Marker position={data} title={station.name}>
          <Popup>
            <h2>{station.name}</h2>
            {getPrices(station.prices)}
          </Popup>
        </Marker>
      );
    });
    return result;
  };

  return (
    <>
      <MapContainer
        style={{ height: "450px" }}
        center={[47.41366, 9.74237]}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {getAllMarkers()}
      </MapContainer>
    </>
  );
}
