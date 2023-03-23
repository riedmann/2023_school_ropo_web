import React from 'react'

export default function List(props) {
  return (
    <div style={{width:"100px",borderStyle:"solid"}}>
    <h1>List</h1>
    <h2>{props.number}</h2>
    </div>
  )
}
