import React from 'react'
import styles from './Item2.module.css';
import { useAppStore } from '../state/State';

export default function Item2() {
  
  const count = useAppStore((state) => state.count)
  const increase = useAppStore((state) => state.increase)
  
  return (
    <div className={styles.container}>
      <h2 onClick={()=>increase()}>Item 2</h2>
      <h3>{count}</h3>  
     </div>
  )
}
