import React from 'react'

export default function GasCard(props) {
  return (
    <div style={{borderStyle:"solid", margin:"10px"}}>
        <h1>{props.station.name}</h1>
        <p>{props.station.location.address}</p>
    </div>
  )
}
