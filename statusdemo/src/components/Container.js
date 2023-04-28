import React from 'react'
import styles from './Container.module.css';
import Item from './Item';
import Item2 from './Item2';

export default function Container(props) {
  return (
    <div className={styles.container}>
        <h1>Container</h1>
        
       <Item/>
       <Item2/>
    </div>
  )
}
