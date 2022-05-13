import React from 'react'
import styles from '../styles/ProductSize.module.css'
import Image from 'next/image'


export const ProductSize = () => {
  return (
    <div className={styles.container}>
        <div className={styles.size} onClick={()=>setSize(0)}>
            <span className={styles.sizeText}  >1Lb</span>
        </div>
        <div className={styles.size} onClick={()=>setSize(1)}>
            <span className={styles.sizeText}  >2Lb</span>
        </div>
        <div className={styles.size} onClick={()=>setSize(2)}>
            <span className={styles.sizeText}  >3Lb</span>
        </div>
    </div>
  )
}
