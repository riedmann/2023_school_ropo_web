import React from 'react'
import GasCard from './GasCard'

export default function GasList(props) {
  return (
    <div><h1>GasList</h1>
    let output = [];
    
    {props.stations.map(station => {
       return (<div><GasCard station={station}/></div>)
    }

    )}
    </div>
  )
}
