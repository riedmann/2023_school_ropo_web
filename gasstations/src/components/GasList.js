import React from 'react'
import GasCard from './GasCard'

export default function GasList(props) {
  return (
  
    <>
    {props.stations.map(station => (
      <GasCard station={station} />
    ))} 
    </>
   

    
  
  )
}
