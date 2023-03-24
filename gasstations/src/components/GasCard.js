import React from 'react'
import styles from './GasCard.module.css';

export default function GasCard(props) {
  return (
    <div className={styles.card}>
        <h1>{props.station.name}</h1>
        <p>{props.station.location.address}</p>
        <h2 style={{marginTop:"10px"}}>€ {props.station.prices[0].amount}</h2>
    </div>
  )
}
