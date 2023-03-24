import React from 'react'
import Card from './Card'

export default function StationList(props) {
    const getStationList = ()=>{
        return props.stations.map((element)=>{
            return <Card title={element.name} subtitle={element.prices[0].amount} address={element.location.address} postalCode={element.location.postalCode} city={element.location.city}></Card>
        })
    }
  return (
    <div>
       
      
        {getStationList()}
    </div>
  )
}
