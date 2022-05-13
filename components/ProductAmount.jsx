import React, { useState } from 'react'
import styles from '../styles/ProductAmount.module.css'
import { AddOutlined, RemoveOutlined } from '@material-ui/icons'

export const ProductAmount = () => {
  
  const [quantity, setQuantity] = useState(1);
  return (
    <div className={styles.container}>
        <button className={styles.VolumeBtn} onClick={(e) => setQuantity((quantity) => quantity > 1 ? quantity -1 : quantity)}><RemoveOutlined/></button>
        <input 
          className={styles.showText} 
          type='number'
          defaultValue={1}
          value={quantity}
        />
        <button className={styles.VolumeBtn} onClick={(e) => setQuantity((quantity) => quantity < 5 ? quantity +1 : quantity)}><AddOutlined/></button>
    </div>
  )
  
}
