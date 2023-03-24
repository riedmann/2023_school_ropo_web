import React from 'react'

export default function Card(props) {
  return (
    <div style={{borderStyle:"solid", borderColor:"grey",borderWidth:"1px", padding:"10px", textAlign:"left",margin:"5px"}}>
        <h1 style={{marginBottom:"5px"}}>{props.title}</h1>
        <h2>€ {props.subtitle}</h2>
        <p>{props.postalCode} {props.city}</p>
        
        <p>{props.address}</p>
    </div>
  )
}
