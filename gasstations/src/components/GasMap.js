import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const position = [47.46296, 9.72747];
export default function GasMap(props) {
  const getMarkers = () => {
    let markers = [];
    
    props.stations.forEach((station) => {
      markers.push(
        <Marker
          position={[station.location.latitude, station.location.longitude]}
        >
          <Popup>{station.name}</Popup>
        </Marker>
      );
    });
    return markers;
  };
  return (
    <MapContainer
      style={{ height: "600px" }}
      center={position}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {getMarkers()}
    </MapContainer>
  );
}
