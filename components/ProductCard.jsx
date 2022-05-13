import React from 'react'
import styles from '../styles/ProductCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const ProductCard = ({product}) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardProduct}>
        <Link href={`/product/${product._id}`} passHref>
          <Image src={product.img} alt='' width="400" height="400"/>
        </Link>
        <h2 className={styles.titleProduct}>{product.title}</h2>
        <h3 className={styles.priceProduct}>฿ {product.price[0]}</h3>
        <button className={styles.cartButton}>Add to Cart </button>
      </div>
    </div>
  )
}
