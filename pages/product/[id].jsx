import React from 'react'
import { useState } from 'react';
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { AddShoppingCartOutlined,AddOutlined, RemoveOutlined } from '@material-ui/icons'
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addProduct } from '../../redux/cartSlice';



const Product = ({ sweet }) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(sweet.price[0]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  }
  const handleSize = (sizeIndex) => {
    const difference = sweet.price[sizeIndex] - sweet.price[size];
    setSize(sizeIndex)
    changePrice(difference)
  }

  const handleClick = () => {
    dispatch(addProduct({ ...sweet, price, quantity }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={sweet.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.rigth}>
        <h1 className={styles.title}>{sweet.title}</h1>
        <span className={styles.price}>฿ {sweet.price[size]}</span>
        <p className={styles.desc}>{sweet.desc}</p>
        <div className={styles.productOptionForm}>
          <span className={styles.productOptionTitle}>Size</span>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <span className={styles.sizeText}  >1Lb</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <span className={styles.sizeText}  >2Lb</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <span className={styles.sizeText}  >3Lb</span>
          </div>
        </div>
        <div className={styles.productOptionForm}>
          <span className={styles.productOptionTitle} >Quantity</span>
          <div className={styles.containerQuatity}>
          <button className={styles.VolumeBtn} onClick={(e) => setQuantity((quantity) => quantity > 1 ? quantity - 1 : quantity)}><RemoveOutlined /></button>
          <input
            className={styles.showText}
            type='number'
            defaultValue={1}
            value={quantity}
          />
          <button className={styles.VolumeBtn} onClick={(e) => setQuantity((quantity) => quantity < 5 ? quantity + 1 : quantity)}><AddOutlined /></button>
          </div>
        </div>
        <div className={styles.cart}>
          <button className={styles.addToCart} onClick={handleClick} ><AddShoppingCartOutlined /></button>
        </div>
      </div>
    </div>
  )
}
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return {
    props: {
      sweet: res.data,
    }
  }
}
export default Product;


