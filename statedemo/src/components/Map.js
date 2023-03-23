import React from 'react'

export default function Map(props) {

    
  return (
    <div  style={{width:"100px",borderStyle:"solid"}}>
        <h1>Map1</h1>
        <h5>{props.number}</h5>
        <button onClick={()=>props.inc()}>Clicke me</button>
    </div>
  )
}
