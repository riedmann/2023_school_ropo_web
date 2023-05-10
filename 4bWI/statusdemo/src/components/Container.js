import React from 'react'
import styles from './Container.module.css'
import { useAppStore } from '../state/Store'


export default function Container() {
  
  const counter = useAppStore((state) => state.counter)
  const increase = useAppStore((state) => state.increase);

  return (
    <div className={styles.container} onClick={()=>increase()} >Container: {counter}</div>
  )
}
