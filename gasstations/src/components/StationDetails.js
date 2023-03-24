import React from "react";

export default function StationDetails(props) {
  let station = props.station;
  return (
    <div>
      <h1>Name:{station.name}</h1>
    </div>
  );
}
